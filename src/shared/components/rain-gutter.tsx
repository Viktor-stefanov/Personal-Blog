"use client";

import { useEffect, useRef } from "react";
import { cn } from "../utils/cn";

const GLYPHS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789<>[]{}/\\|=+*#$&_";
// doubles as font size, fall step and column width, so it also scales speed
const CELL = 14;
// fall rate is CELL / FRAME_MS — lower is faster
const FRAME_MS = 40;
// per-frame fade of the previous frame; lower leaves longer trails
const TRAIL_ALPHA = 0.12;
// odds a finished column keeps falling off-canvas, so gaps stay uneven
const RESPAWN_CHANCE = 0.975;

export function RainGutter({
  sticky,
  className,
}: {
  sticky?: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const styles = getComputedStyle(canvas);
    const glyphColor = styles.getPropertyValue("--color-primary").trim();
    const trailColor = styles.getPropertyValue("--color-bg").trim();
    const fontFamily = styles.getPropertyValue("--font-mono").trim();

    let rows: number[] = [];
    let frame = 0;
    let lastDraw = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${CELL}px ${fontFamily}`;
      ctx.textBaseline = "top";
      // stagger the columns above the fold so they don't fall in lockstep
      rows = Array.from({ length: Math.max(1, Math.ceil(width / CELL)) }, () =>
        Math.floor((Math.random() * -height) / CELL),
      );
    };

    const draw = (time: number) => {
      frame = requestAnimationFrame(draw);
      if (time - lastDraw < FRAME_MS) return;
      lastDraw = time;

      const { width, height } = canvas.getBoundingClientRect();

      ctx.globalAlpha = TRAIL_ALPHA;
      ctx.fillStyle = trailColor;
      ctx.fillRect(0, 0, width, height);

      ctx.globalAlpha = 1;
      ctx.fillStyle = glyphColor;
      rows.forEach((row, column) => {
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        ctx.fillText(glyph, column * CELL, row * CELL);
        const cleared = row * CELL > height && Math.random() > RESPAWN_CHANCE;
        rows[column] = cleared ? 0 : row + 1;
      });
    };

    resize();
    frame = requestAnimationFrame(draw);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={cn("rain-gutter", className || "")}
      data-sticky={sticky || undefined}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
