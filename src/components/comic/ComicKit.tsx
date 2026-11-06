import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Reveal — comic panels slide in as you scroll (and stay put)        */
/* ------------------------------------------------------------------ */
export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect reduced-motion (and give everyone content if IO is unavailable)
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Starburst — the classic comic "KA-POW" badge, as crisp SVG         */
/* ------------------------------------------------------------------ */
export const Starburst = ({
  children,
  color = "var(--yellow)",
  spikes = 16,
  className = "",
  textClassName = "",
  wobble = false,
}: {
  children: ReactNode;
  color?: string;
  spikes?: number;
  className?: string;
  textClassName?: string;
  wobble?: boolean;
}) => {
  const points = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? 50 : 35;
      const a = (Math.PI * i) / spikes - Math.PI / 2;
      pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
    }
    return pts.join(" ");
  }, [spikes]);

  return (
    <div className={`grid ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="col-start-1 row-start-1 h-full w-full"
        aria-hidden="true"
      >
        <polygon
          points={points}
          fill={color}
          stroke="var(--ink)"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`col-start-1 row-start-1 grid place-items-center px-2 text-center display leading-[0.85] ${
          wobble ? "anim-wiggle" : ""
        } ${textClassName}`}
      >
        {children}
      </span>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Speech bubble                                                      */
/* ------------------------------------------------------------------ */
export const SpeechBubble = ({
  children,
  className = "",
  right = false,
}: {
  children: ReactNode;
  className?: string;
  right?: boolean;
}) => (
  <div className={`bubble ${right ? "bubble-right" : ""} ${className}`}>{children}</div>
);

/* ------------------------------------------------------------------ */
/*  Marquee ticker                                                     */
/* ------------------------------------------------------------------ */
export const Marquee = ({
  items,
  reverse = false,
  duration = 34,
  separator = "★",
  className = "",
  itemClassName = "",
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
  separator?: string;
  className?: string;
  itemClassName?: string;
}) => (
  <div className={`marquee ${className}`} aria-hidden="true">
    {[0, 1].map((copy) => (
      <div
        key={copy}
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ "--dur": `${duration}s` } as CSSProperties}
      >
        {items.map((item, i) => (
          <span
            key={`${copy}-${i}`}
            className={`display whitespace-nowrap text-lg tracking-[0.12em] ${itemClassName}`}
          >
            {item}
            <span className="ml-9 text-comic-red">{separator}</span>
          </span>
        ))}
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Tape strip (for that "pinned to a corkboard" energy)               */
/* ------------------------------------------------------------------ */
export const Tape = ({ className = "" }: { className?: string }) => (
  <span className={`tape ${className}`} aria-hidden="true" />
);

/* ------------------------------------------------------------------ */
/*  Chapter heading                                                    */
/* ------------------------------------------------------------------ */
export const ChapterTitle = ({
  kicker,
  title,
  blurb,
  accent = "var(--red)",
  align = "center",
}: {
  kicker: string;
  title: ReactNode;
  blurb?: ReactNode;
  accent?: string;
  align?: "center" | "left";
}) => (
  <div className={align === "center" ? "text-center" : "text-left"}>
    <div className={align === "center" ? "flex justify-center" : ""}>
      <span className="sticker sticker-red mb-4" style={{ background: accent }}>
        {kicker}
      </span>
    </div>
    <h2 className="display text-4xl leading-[0.92] text-comic-ink sm:text-5xl lg:text-6xl">
      {title}
    </h2>
    <svg
      viewBox="0 0 240 16"
      className={`mt-2 h-3 w-56 ${align === "center" ? "mx-auto" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M2 11c22-8 42 4 62-1s38-9 58-2 44 9 62 1 38-6 54 2"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
    {blurb ? (
      <p
        className={`mt-4 max-w-2xl text-balance text-lg text-comic-ink/80 ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {blurb}
      </p>
    ) : null}
  </div>
);
