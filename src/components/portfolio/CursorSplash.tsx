import { useEffect, useMemo, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
  hue: number;
};

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

export function CursorSplash() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const reduceMotion = useMemo(() => prefersReducedMotion(), []);

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const onMove = (e: PointerEvent) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      pointerRef.current.active = true;

      const baseHue = 42; // gold
      const hueJitter = (Math.sin(Date.now() / 240) * 10 + 10) | 0;

      // Keep emissions minimal for high refresh-rate smoothness.
      dotsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 1.1,
        vy: (Math.random() - 0.5) * 1.1,
        r: 10 + Math.random() * 14,
        life: 1,
        hue: baseHue + hueJitter + Math.random() * 6,
      });

      if (dotsRef.current.length > 90) dotsRef.current.splice(0, dotsRef.current.length - 90);
    };

    const onLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });

    let raf = 0;
    const tick = () => {
      raf = window.requestAnimationFrame(tick);

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = "lighter";
      ctx.shadowBlur = 18;

      const dots = dotsRef.current;
      for (let i = dots.length - 1; i >= 0; i--) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        d.vx *= 0.98;
        d.vy *= 0.98;
        d.life -= 0.022;

        if (d.life <= 0) {
          dots.splice(i, 1);
          continue;
        }

        const a = Math.max(d.life, 0) * 0.16;
        ctx.shadowColor = `hsla(${d.hue}, 86%, 62%, ${a})`;
        ctx.fillStyle = `hsla(${d.hue}, 86%, 62%, ${a})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // A subtle "cursor aura" for premium presence
      if (pointerRef.current.active) {
        const { x, y } = pointerRef.current;
        ctx.shadowBlur = 0;
        const aura = ctx.createRadialGradient(x, y, 0, x, y, 160);
        aura.addColorStop(0, "hsla(42, 82%, 55%, 0.055)");
        aura.addColorStop(1, "hsla(42, 82%, 55%, 0)");
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(x, y, 160, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 hidden md:block"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
