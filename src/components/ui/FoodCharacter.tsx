/**
 * 3D clay-style food mascots (rendered artwork, exported to WebP in
 * public/characters). Purely decorative — always aria-hidden, never carries
 * meaning that isn't already in nearby text.
 *
 * `desktopOnly` exists because `hidden lg:block` only hides an image, it does
 * NOT stop the browser from downloading it. A <picture> whose small-screen
 * source is a 1x1 transparent GIF is the only reliable way to keep the real
 * asset off phones.
 */

export type CharacterName =
  | "taco"
  | "pasta"
  | "tomato"
  | "bag"
  | "envelope"
  | "phone"
  | "cart"
  | "row"
  | "bench";

const BLANK =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

/**
 * Wide art that ships in two widths. Without this a phone downloads the
 * desktop-sized file to paint it at a third of the size — 150KB of cart art
 * into a 390px viewport, which is most of the page's image budget.
 * `sizes` must track the rendered width at each breakpoint.
 */
const RESPONSIVE: Partial<Record<CharacterName, { small: number; large: number; sizes: string }>> = {
  cart: { small: 640, large: 1200, sizes: "(min-width: 640px) 42rem, 100vw" },
  bench: { small: 640, large: 1200, sizes: "(min-width: 768px) 48rem, 100vw" },
  phone: { small: 400, large: 640, sizes: "(min-width: 640px) 16rem, 12rem" },
  row: { small: 640, large: 1200, sizes: "(min-width: 640px) 32rem, 100vw" },
};

interface FoodCharacterProps {
  name: CharacterName;
  className?: string;
  /** Skip the download entirely below the lg breakpoint. */
  desktopOnly?: boolean;
  /** Decorative art is lazy by default; set for above-the-fold art. */
  priority?: boolean;
}

export function FoodCharacter({
  name,
  className,
  desktopOnly,
  priority,
}: FoodCharacterProps) {
  const src = `/characters/${name}.webp`;
  const loading = priority ? "eager" : "lazy";

  if (desktopOnly) {
    return (
      <picture>
        <source media="(max-width: 1023px)" srcSet={BLANK} />
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading={loading}
          decoding="async"
          className={className}
        />
      </picture>
    );
  }

  const responsive = RESPONSIVE[name];

  return (
    // next/image is deliberately not used: these are already WebP, already
    // exported at ~3x their display size, and already lazy. Routing them
    // through the optimizer would add billed transformations for no gain.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      {...(responsive && {
        srcSet: `/characters/${name}-${responsive.small}.webp ${responsive.small}w, ${src} ${responsive.large}w`,
        sizes: responsive.sizes,
      })}
      alt=""
      aria-hidden="true"
      loading={loading}
      decoding="async"
      className={className}
    />
  );
}

/**
 * A stack of mascots where only the active one is visible, cross-fading on
 * change. Every frame is in the DOM from first paint, so stepping forward
 * swaps instantly instead of waiting on a fetch — the reason the plain
 * swap-the-src version visibly lagged a beat behind the step change.
 */
export function CharacterStack({
  names,
  activeIndex,
  className,
}: {
  names: readonly CharacterName[];
  activeIndex: number;
  className?: string;
}) {
  return (
    <div className={`relative aspect-square ${className ?? ""}`}>
      {names.map((name, i) => {
        const active = i === activeIndex;
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={name}
            src={`/characters/${name}.webp`}
            alt=""
            aria-hidden="true"
            decoding="async"
            className={[
              "absolute inset-0 h-full w-full object-contain",
              "transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
              active
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-1",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}

/**
 * The four mascots sitting in a row, cropped at their seat line so the crop
 * edge lands on the top border of whatever card sits beneath them — reads as
 * them perched on the card. Desktop-only: at phone widths four characters
 * across are too small to register.
 */
export function HeroCharacterRow({ className }: { className?: string }) {
  return (
    <picture>
      <source media="(max-width: 1023px)" srcSet={BLANK} />
      {/* sizes must track the rendered width in Hero.tsx (w-[38rem]) — a value
          larger than the real box makes the browser fetch the 1574w file when
          the 800w one would do. */}
      <source
        srcSet="/characters/hero-row-800.webp 800w, /characters/hero-row.webp 1574w"
        sizes="38rem"
      />
      <img
        src="/characters/hero-row.webp"
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className={className}
      />
    </picture>
  );
}
