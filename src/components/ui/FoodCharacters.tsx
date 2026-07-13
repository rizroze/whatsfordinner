/**
 * Cute food characters — hand-drawn SVG mascots in the Warm Minimal palette.
 * Inspired by the friendly-produce style ETM uses, but original artwork.
 * Flat fills, dot eyes, blush cheeks, stick limbs with rounded caps.
 */

interface CharacterProps {
  className?: string;
}

const LIMB = { stroke: "#78716C", strokeWidth: 3.5, strokeLinecap: "round" as const, fill: "none" };
const EYE = "#292524";
const BLUSH = "#FCA5A5";

export function CarrotCharacter({ className }: CharacterProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      {/* jumping pose — arms up */}
      <path d="M32 52 L18 38" {...LIMB} />
      <path d="M88 52 L102 38" {...LIMB} />
      <path d="M50 112 L44 124" {...LIMB} />
      <path d="M70 112 L76 124" {...LIMB} />
      {/* leaves */}
      <path d="M60 22 C56 10 48 6 42 8 C46 14 50 18 56 22 Z" fill="#86BC7C" />
      <path d="M60 22 C60 8 66 2 74 4 C72 12 68 18 62 22 Z" fill="#A3C585" />
      {/* body */}
      <path d="M60 20 C78 20 88 34 86 52 C84 76 72 104 60 114 C48 104 36 76 34 52 C32 34 42 20 60 20 Z" fill="#F97316" />
      <path d="M44 44 L56 46 M46 66 L58 68 M52 88 L62 90" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* face */}
      <circle cx="51" cy="48" r="3.2" fill={EYE} />
      <circle cx="69" cy="48" r="3.2" fill={EYE} />
      <path d="M54 58 C57 62 63 62 66 58" stroke={EYE} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <ellipse cx="45" cy="56" rx="3.6" ry="2.2" fill={BLUSH} opacity="0.6" />
      <ellipse cx="75" cy="56" rx="3.6" ry="2.2" fill={BLUSH} opacity="0.6" />
    </svg>
  );
}

export function AvocadoCharacter({ className }: CharacterProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      {/* waving pose */}
      <path d="M30 74 L14 62" {...LIMB} />
      <path d="M90 70 L104 52" {...LIMB} />
      <path d="M50 116 L46 126" {...LIMB} />
      <path d="M70 116 L74 126" {...LIMB} />
      {/* body */}
      <path d="M60 12 C74 12 82 24 82 36 C82 44 88 52 90 64 C93 86 79 118 60 118 C41 118 27 86 30 64 C32 52 38 44 38 36 C38 24 46 12 60 12 Z" fill="#A3C585" />
      <path d="M60 20 C71 20 77 29 77 38 C77 45 82 52 84 62 C87 81 75 110 60 110 C45 110 33 81 36 62 C38 52 43 45 43 38 C43 29 49 20 60 20 Z" fill="#E8F0D8" />
      {/* pit */}
      <circle cx="60" cy="84" r="15" fill="#B08968" />
      <circle cx="55" cy="79" r="4.5" fill="#C9A47F" />
      {/* face */}
      <circle cx="52" cy="47" r="3.2" fill={EYE} />
      <circle cx="68" cy="47" r="3.2" fill={EYE} />
      <path d="M55 56 C57.5 59.5 62.5 59.5 65 56" stroke={EYE} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <ellipse cx="46" cy="54" rx="3.6" ry="2.2" fill={BLUSH} opacity="0.6" />
      <ellipse cx="74" cy="54" rx="3.6" ry="2.2" fill={BLUSH} opacity="0.6" />
    </svg>
  );
}

export function OrangeCharacter({ className }: CharacterProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      {/* content sitting pose */}
      <path d="M26 80 L12 88" {...LIMB} />
      <path d="M94 80 L108 88" {...LIMB} />
      <path d="M48 114 L44 126" {...LIMB} />
      <path d="M72 114 L76 126" {...LIMB} />
      {/* leaf + stem */}
      <path d="M60 16 L60 8" stroke="#78716C" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M62 12 C68 4 78 4 82 8 C78 14 70 16 62 14 Z" fill="#86BC7C" />
      {/* body */}
      <circle cx="60" cy="68" r="48" fill="#FB923C" />
      <circle cx="42" cy="38" r="3" fill="#FDBA74" />
      <circle cx="78" cy="36" r="2.5" fill="#FDBA74" />
      <circle cx="88" cy="52" r="2.5" fill="#FDBA74" />
      {/* face — happy closed eyes */}
      <path d="M44 62 C46.5 58.5 51.5 58.5 54 62" stroke={EYE} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M66 62 C68.5 58.5 73.5 58.5 76 62" stroke={EYE} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M52 72 C56 77 64 77 68 72" stroke={EYE} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <ellipse cx="38" cy="70" rx="4.5" ry="2.8" fill={BLUSH} opacity="0.6" />
      <ellipse cx="82" cy="70" rx="4.5" ry="2.8" fill={BLUSH} opacity="0.6" />
    </svg>
  );
}

export function StrawberryCharacter({ className }: CharacterProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      {/* pointing pose (little teacher) */}
      <path d="M32 66 L16 54" {...LIMB} />
      <path d="M88 66 L104 60" {...LIMB} />
      <path d="M50 112 L46 124" {...LIMB} />
      <path d="M70 112 L74 124" {...LIMB} />
      {/* cap */}
      <path d="M60 12 C50 12 40 18 36 26 C44 30 52 31 60 30 C68 31 76 30 84 26 C80 18 70 12 60 12 Z" fill="#86BC7C" />
      <path d="M60 6 L60 14" stroke="#5A7D3A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* body */}
      <path d="M60 24 C80 24 90 38 88 56 C86 80 74 106 60 116 C46 106 34 80 32 56 C30 38 40 24 60 24 Z" fill="#F87171" />
      {/* seeds */}
      <g fill="#FDE68A">
        <ellipse cx="46" cy="50" rx="1.8" ry="2.6" />
        <ellipse cx="74" cy="50" rx="1.8" ry="2.6" />
        <ellipse cx="42" cy="68" rx="1.8" ry="2.6" />
        <ellipse cx="78" cy="68" rx="1.8" ry="2.6" />
        <ellipse cx="52" cy="86" rx="1.8" ry="2.6" />
        <ellipse cx="68" cy="86" rx="1.8" ry="2.6" />
        <ellipse cx="60" cy="100" rx="1.8" ry="2.6" />
      </g>
      {/* face */}
      <circle cx="52" cy="52" r="3.2" fill={EYE} />
      <circle cx="68" cy="52" r="3.2" fill={EYE} />
      <path d="M55 62 C57.5 65.5 62.5 65.5 65 62" stroke={EYE} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <ellipse cx="46" cy="60" rx="3.6" ry="2.2" fill={BLUSH} opacity="0.6" />
      <ellipse cx="74" cy="60" rx="3.6" ry="2.2" fill={BLUSH} opacity="0.6" />
    </svg>
  );
}

export function BroccoliCharacter({ className }: CharacterProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      {/* proud standing pose — hands on hips */}
      <path d="M40 84 C32 82 30 74 34 70" {...LIMB} />
      <path d="M80 84 C88 82 90 74 86 70" {...LIMB} />
      <path d="M52 116 L48 126" {...LIMB} />
      <path d="M68 116 L72 126" {...LIMB} />
      {/* florets */}
      <circle cx="40" cy="34" r="16" fill="#86BC7C" />
      <circle cx="60" cy="24" r="18" fill="#A3C585" />
      <circle cx="80" cy="34" r="16" fill="#86BC7C" />
      <circle cx="48" cy="44" r="13" fill="#A3C585" />
      <circle cx="72" cy="44" r="13" fill="#86BC7C" />
      {/* stalk */}
      <path d="M48 52 C48 78 50 100 54 116 L66 116 C70 100 72 78 72 52 Z" fill="#D9E8C5" />
      {/* face on stalk */}
      <circle cx="54" cy="72" r="3.2" fill={EYE} />
      <circle cx="68" cy="72" r="3.2" fill={EYE} />
      <path d="M56.5 81 C58.5 84 63.5 84 65.5 81" stroke={EYE} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <ellipse cx="49" cy="79" rx="3.4" ry="2.1" fill={BLUSH} opacity="0.6" />
      <ellipse cx="72.5" cy="79" rx="3.4" ry="2.1" fill={BLUSH} opacity="0.6" />
    </svg>
  );
}

export function WatermelonCharacter({ className }: CharacterProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      {/* chill pose — one arm up */}
      <path d="M26 84 L12 74" {...LIMB} />
      <path d="M94 84 L108 66" {...LIMB} />
      <path d="M48 112 L44 124" {...LIMB} />
      <path d="M72 112 L76 124" {...LIMB} />
      {/* slice */}
      <path d="M14 74 C14 46 34 26 60 26 C86 26 106 46 106 74 L14 74 Z" fill="#A3C585" transform="rotate(180 60 62)" />
      <path d="M20 71 C20 49 37 32 60 32 C83 32 100 49 100 71 L20 71 Z" fill="#F5E6C8" transform="rotate(180 60 62)" />
      <path d="M26 68 C26 52 41 38 60 38 C79 38 94 52 94 68 L26 68 Z" fill="#F87171" transform="rotate(180 60 62)" />
      {/* seeds */}
      <g fill={EYE}>
        <ellipse cx="44" cy="94" rx="1.8" ry="2.8" />
        <ellipse cx="60" cy="100" rx="1.8" ry="2.8" />
        <ellipse cx="76" cy="94" rx="1.8" ry="2.8" />
      </g>
      {/* face */}
      <circle cx="50" cy="66" r="3.2" fill={EYE} />
      <circle cx="70" cy="66" r="3.2" fill={EYE} />
      <path d="M53 75 C56 79 64 79 67 75" stroke={EYE} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <ellipse cx="42" cy="73" rx="3.8" ry="2.3" fill={BLUSH} opacity="0.6" />
      <ellipse cx="78" cy="73" rx="3.8" ry="2.3" fill={BLUSH} opacity="0.6" />
    </svg>
  );
}
