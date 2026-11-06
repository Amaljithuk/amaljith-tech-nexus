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
/*  Tiny 8-bit sound kit (WebAudio, zero assets, on by default)        */
/* ------------------------------------------------------------------ */
export type SfxKind =
  | "pop"
  | "tick"
  | "pow"
  | "boing"
  | "whoosh"
  | "success"
  | "open";

type SfxValue = {
  enabled: boolean;
  toggle: () => void;
  play: (kind?: SfxKind) => void;
};

const SfxContext = createContext<SfxValue>({
  enabled: true,
  toggle: () => {},
  play: () => {},
});

export const useSfx = () => useContext(SfxContext);

const STORAGE_KEY = "au-sfx";

const TONES: Record<
  Exclude<SfxKind, "whoosh" | "success">,
  { from: number; to: number; type: OscillatorType; dur: number; gain: number }
> = {
  pop: { from: 300, to: 720, type: "triangle", dur: 0.14, gain: 0.08 },
  tick: { from: 980, to: 980, type: "square", dur: 0.04, gain: 0.025 },
  pow: { from: 420, to: 80, type: "square", dur: 0.22, gain: 0.09 },
  boing: { from: 540, to: 160, type: "sine", dur: 0.26, gain: 0.07 },
  open: { from: 620, to: 1040, type: "triangle", dur: 0.18, gain: 0.06 },
};

export const SfxProvider = ({ children }: { children: ReactNode }) => {
  const [enabled, setEnabled] = useState(true);
  const ctxRef = useRef<AudioContext | null>(null);
  const enabledRef = useRef(true);
  const primedRef = useRef(false);

  // remember the visitor's choice
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "off") {
        setEnabled(false);
        enabledRef.current = false;
      }
    } catch {
      /* private mode, whatever */
    }
  }, []);

  const getCtx = useCallback((): AudioContext | null => {
    try {
      const AudioCtor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtor) return null;
      if (!ctxRef.current) ctxRef.current = new AudioCtor();
      if (ctxRef.current.state === "suspended") void ctxRef.current.resume();
      return ctxRef.current;
    } catch {
      return null;
    }
  }, []);

  const beep = useCallback(
    (
      ctx: AudioContext,
      kind: Exclude<SfxKind, "whoosh" | "success">,
      at = 0,
      detune = 0,
      gainScale = 1
    ) => {
      const t = TONES[kind];
      const start = ctx.currentTime + at;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = t.type;
      osc.frequency.setValueAtTime(t.from, start);
      if (t.to !== t.from) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, t.to), start + t.dur);
      }
      osc.detune.value = detune;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(t.gain * gainScale, start + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + t.dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + t.dur + 0.02);
    },
    []
  );

  const noise = useCallback((ctx: AudioContext, at: number, dur: number, gainValue: number) => {
    const frames = Math.floor(ctx.sampleRate * dur);
    const buffer = ctx.createBuffer(1, frames, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < frames; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 0.8;
    const start = ctx.currentTime + at;
    filter.frequency.setValueAtTime(320, start);
    filter.frequency.exponentialRampToValueAtTime(2600, start + dur);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(gainValue, start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start(start);
    src.stop(start + dur + 0.02);
  }, []);

  const play = useCallback(
    (kind: SfxKind = "pop") => {
      if (!enabledRef.current || !primedRef.current) return;
      const ctx = getCtx();
      if (!ctx) return;
      try {
        if (kind === "whoosh") {
          noise(ctx, 0, 0.32, 0.05);
          return;
        }
        if (kind === "success") {
          beep(ctx, "open", 0, 0, 0.9);
          beep(ctx, "open", 0.09, 400, 0.9);
          beep(ctx, "open", 0.18, 800, 0.9);
          return;
        }
        beep(ctx, kind);
      } catch {
        /* audio is a bonus, never a blocker */
      }
    },
    [beep, getCtx, noise]
  );

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      enabledRef.current = next;
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
      } catch {
        /* ignore */
      }
      if (next) {
        window.setTimeout(() => {
          const ctx = getCtx();
          if (!ctx) return;
          beep(ctx, "open", 0, 0);
          beep(ctx, "open", 0.1, 400);
        }, 20);
      }
      return next;
    });
  }, [beep, getCtx]);

  /* the browser only lets audio start from a real gesture — wait for one */
  useEffect(() => {
    const prime = () => {
      if (primedRef.current) return;
      primedRef.current = true;
      getCtx();
    };
    window.addEventListener("pointerdown", prime);
    window.addEventListener("keydown", prime);
    return () => {
      window.removeEventListener("pointerdown", prime);
      window.removeEventListener("keydown", prime);
    };
  }, [getCtx]);

  /* global hover + click sounds, so every button answers back */
  useEffect(() => {
    if (!enabled) return;

    let lastHovered: Element | null = null;
    let lastHoverAt = 0;

    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const hit = target?.closest?.("a, button, summary, [data-sfx-hover]");
      if (!hit || hit === lastHovered) return;
      lastHovered = hit;
      const now = performance.now();
      if (now - lastHoverAt < 90) return;
      lastHoverAt = now;
      play("tick");
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const hit = target?.closest?.("a, button, summary, [data-sfx-click]");
      if (!hit) return;
      if (hit.hasAttribute("data-sfx-quiet")) return;
      play(hit.tagName === "A" ? "pow" : "pop");
    };

    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("click", onClick);
    };
  }, [enabled, play]);

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
  "MERGE!",
  "LGTM!",
  "O(1)!",
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
