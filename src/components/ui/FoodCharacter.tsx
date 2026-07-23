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
  | "row";

const BLANK =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

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

  return (
    // next/image is deliberately not used: these are already WebP, already
    // exported at ~3x their display size, and already lazy. Routing them
    // through the optimizer would add billed transformations for no gain.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading={loading}
      decoding="async"
      className={className}
    />
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
      {/* sizes must track the rendered width in Hero.tsx (w-[30rem]) — a value
          larger than the real box makes the browser fetch the 1574w file when
          the 800w one would do. */}
      <source
        srcSet="/characters/hero-row-800.webp 800w, /characters/hero-row.webp 1574w"
        sizes="30rem"
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
