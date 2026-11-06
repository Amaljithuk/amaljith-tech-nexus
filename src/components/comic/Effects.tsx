import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------------ */
/*  Tiny 8-bit sound effects (WebAudio, zero assets, off by default)   */
/* ------------------------------------------------------------------ */
type SfxKind = "pop" | "boing" | "pow" | "tick";

type SfxValue = {
  enabled: boolean;
  toggle: () => void;
  play: (kind?: SfxKind) => void;
};

const SfxContext = createContext<SfxValue>({
  enabled: false,
  toggle: () => {},
  play: () => {},
});

export const useSfx = () => useContext(SfxContext);

const TONES: Record<SfxKind, { from: number; to: number; type: OscillatorType }> = {
  pop: { from: 300, to: 720, type: "triangle" },
  boing: { from: 520, to: 150, type: "sine" },
  pow: { from: 420, to: 80, type: "square" },
  tick: { from: 900, to: 900, type: "square" },
};

export const SfxProvider = ({ children }: { children: ReactNode }) => {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  const play = useCallback(
    (kind: SfxKind = "pop") => {
      if (!enabled) return;
      try {
        const AudioCtor =
          window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtor) return;
        if (!ctxRef.current) ctxRef.current = new AudioCtor();
        const ctx = ctxRef.current;
        const tone = TONES[kind];
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = tone.type;
        osc.frequency.setValueAtTime(tone.from, now);
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, tone.to), now + 0.13);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(kind === "tick" ? 0.05 : 0.08, now + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      } catch {
        /* audio is a bonus, never a blocker */
      }
    },
    [enabled]
  );

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      if (next) {
        // tiny confirmation blip
        window.setTimeout(() => {
          try {
            const AudioCtor =
              window.AudioContext ||
              (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
            if (!AudioCtor) return;
            if (!ctxRef.current) ctxRef.current = new AudioCtor();
            const ctx = ctxRef.current;
            const t = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(440, t);
            osc.frequency.exponentialRampToValueAtTime(880, t + 0.09);
            gain.gain.setValueAtTime(0.0001, t);
            gain.gain.exponentialRampToValueAtTime(0.06, t + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.15);
          } catch {
            /* ignore */
          }
        }, 10);
      }
      return next;
    });
  }, []);

  return <SfxContext.Provider value={{ enabled, toggle, play }}>{children}</SfxContext.Provider>;
};

/* ------------------------------------------------------------------ */
/*  Sound-effect words that pop wherever you click                     */
/* ------------------------------------------------------------------ */
const WORDS = [
  "POW!",
  "BAM!",
  "ZAP!",
  "SHIP IT!",
  "PING!",
  "BOOM!",
  "NICE!",
  "GIT PUSH!",
  "DING!",
  "TA-DA!",
  "EOF!",
  "SHAZAM!",
];
const WORD_COLORS = ["var(--yellow)", "var(--pink)", "var(--cyan)", "var(--green)", "#ffffff"];

type Word = { id: number; x: number; y: number; text: string; color: string };

export const SoundWords = () => {
  const [words, setWords] = useState<Word[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("input, textarea, select, [data-nosfx]")) return;

      const id = idRef.current++;
      const word: Word = {
        id,
        x: event.clientX,
        y: event.clientY,
        text: WORDS[Math.floor(Math.random() * WORDS.length)],
        color: WORD_COLORS[Math.floor(Math.random() * WORD_COLORS.length)],
      };
      setWords((prev) => [...prev.slice(-5), word]);
      window.setTimeout(() => {
        setWords((prev) => prev.filter((w) => w.id !== id));
      }, 1000);
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {words.map((w) => (
        <span key={w.id} className="sfx-word" style={{ left: w.x, top: w.y, color: w.color }}>
          {w.text}
        </span>
      ))}
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Reading progress — because this is, technically, a comic           */
/* ------------------------------------------------------------------ */
export const ScrollProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setPct(max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="progress-rail" aria-hidden="true">
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
};
