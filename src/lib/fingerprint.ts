/**
 * Browser fingerprint generator.
 * Creates a hash from canvas rendering + screen properties + timezone.
 * Survives incognito mode since it's based on hardware/GPU, not cookies.
 */
export async function generateFingerprint(): Promise<string> {
  const components: string[] = [];

  // Canvas fingerprint — GPU renders text slightly differently per device
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 50;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.textBaseline = "top";
      ctx.font = "14px Arial";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = "#069";
      ctx.fillText("WFD:fingerprint", 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
      ctx.fillText("WFD:fingerprint", 4, 17);
      components.push(canvas.toDataURL());
    }
  } catch {
    // Canvas blocked — that's fine, other signals still work
  }

  // Screen properties
  components.push(`${screen.width}x${screen.height}x${screen.colorDepth}`);
  components.push(String(window.devicePixelRatio || 1));

  // Timezone
  components.push(Intl.DateTimeFormat().resolvedOptions().timeZone);

  // Language
  components.push(navigator.language);

  // Platform
  components.push(navigator.platform);

  // Hardware concurrency (CPU cores)
  components.push(String(navigator.hardwareConcurrency || 0));

  // WebGL renderer (very unique per GPU)
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    if (gl) {
      const ext = gl.getExtension("WEBGL_debug_renderer_info");
      if (ext) {
        components.push(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
      }
    }
  } catch {
    // WebGL blocked
  }

  // Hash all components into a short string
  const raw = components.join("|");
  const encoder = new TextEncoder();
  const data = encoder.encode(raw);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
