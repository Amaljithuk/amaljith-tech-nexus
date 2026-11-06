import { useEffect, useRef } from "react";

/**
 * A comic cursor: an inked arrow that tracks the pointer, a lagging dashed
 * ring that reacts to anything clickable, and a little trail of stars.
 * Only mounts on precise pointers with motion allowed; touch devices keep
 * their native behaviour and nobody loses a real cursor.
 */
const SPARK_GLYPHS = ["✦", "✧", "★", "•", "✦", "✷"];
const SPARK_COLORS = ["var(--red)", "var(--blue)", "var(--purple)", "var(--green)", "var(--yellow)"];

export const CursorFX = () => {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const sparksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const arrow = arrowRef.current;
    const ring = ringRef.current;
    const sparks = sparksRef.current;
    if (!arrow || !ring || !sparks) return;

    // NB: the native cursor is only hidden once we know where to draw ours.

    // build a small pool of reusable spark nodes
    const pool: HTMLSpanElement[] = [];
    for (let i = 0; i < 14; i++) {
      const el = document.createElement("span");
      el.className = "cursor-spark";
      el.textContent = SPARK_GLYPHS[i % SPARK_GLYPHS.length];
      el.style.color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
      sparks.appendChild(el);
      pool.push(el);
    }
    let sparkIndex = 0;
    let lastSpark = 0;

    const state = {
      tx: window.innerWidth / 2,
      ty: window.innerHeight / 2,
      ax: window.innerWidth / 2,
      ay: window.innerHeight / 2,
      rx: window.innerWidth / 2,
      ry: window.innerHeight / 2,
      visible: false,
      hot: false,
      tilt: 0,
    };

    const show = () => {
      if (state.visible) return;
      state.visible = true;
      arrow.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const emitSpark = (x: number, y: number, big = false) => {
      const el = pool[sparkIndex % pool.length];
      sparkIndex++;
      el.style.left = `${x + (Math.random() * 18 - 9)}px`;
      el.style.top = `${y + (Math.random() * 18 - 9)}px`;
      el.style.fontSize = big ? "22px" : `${10 + Math.random() * 8}px`;
      el.classList.remove("go");
      // force reflow so the animation can restart
      void el.offsetWidth;
      el.classList.add("go");
    };

    const onMove = (event: PointerEvent) => {
      if (!state.visible) {
        // snap into place on first sight so it never swooshes in from the corner
        state.ax = state.rx = event.clientX;
        state.ay = state.ry = event.clientY;
        document.documentElement.classList.add("has-comic-cursor");
        show();
      }
      state.tx = event.clientX;
      state.ty = event.clientY;
      const now = performance.now();
      if (now - lastSpark > 55) {
        lastSpark = now;
        emitSpark(event.clientX, event.clientY);
      }
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const hot = !!target?.closest?.("a, button, summary, [role='button'], input, textarea, .panel-hover");
      if (hot === state.hot) return;
      state.hot = hot;
      ring.classList.toggle("is-hot", hot);
      arrow.classList.toggle("is-hot", hot);
    };

    const onDown = () => {
      arrow.classList.add("is-down");
      ring.classList.add("is-down");
      emitSpark(state.tx, state.ty, true);
    };
    const onUp = () => {
      arrow.classList.remove("is-down");
      ring.classList.remove("is-down");
    };
    const onLeave = () => {
      state.visible = false;
      arrow.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => show();

    let raf = 0;
    const loop = () => {
      const prevX = state.ax;
      state.ax += (state.tx - state.ax) * 0.55;
      state.ay += (state.ty - state.ay) * 0.55;
      state.rx += (state.tx - state.rx) * 0.18;
      state.ry += (state.ty - state.ry) * 0.18;

      // the arrow leans into the direction it is travelling
      const velocity = Math.max(-16, Math.min(16, (state.ax - prevX) * 1.1));
      state.tilt += (velocity - state.tilt) * 0.18;

      arrow.style.transform = `translate3d(${state.ax}px, ${state.ay}px, 0) rotate(${state.tilt.toFixed(2)}deg)`;
      ring.style.transform = `translate3d(${state.rx}px, ${state.ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
      document.documentElement.classList.remove("has-comic-cursor");
      pool.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div className="comic-cursor" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring">
        <span className="cursor-ring-dot" />
      </div>
      <div ref={arrowRef} className="cursor-arrow">
        <svg viewBox="0 0 30 34" width="26" height="30" aria-hidden="true">
          <path
            d="M5 3.5 L5 26 L11 20.5 L15.6 30 L21 27.6 L16.4 18.4 L24.5 18 Z"
            fill="var(--cream)"
            stroke="var(--ink)"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M5 3.5 L5 14 L13.5 12 Z" fill="var(--red)" opacity="0.9" />
        </svg>
      </div>
      <div ref={sparksRef} className="cursor-sparks" />
    </div>
  );
};

export default CursorFX;
