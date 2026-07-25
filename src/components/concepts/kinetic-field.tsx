"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  reducedMotion?: boolean | null;
};

export function KineticField({ className, reducedMotion }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const pointer = { x: 0.62, y: 0.45, tx: 0.62, ty: 0.45 };
    const nodes: {
      x: number;
      y: number;
      ox: number;
      oy: number;
      r: number;
    }[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes.length = 0;
      const cols = Math.max(12, Math.floor(width / 42));
      const rows = Math.max(9, Math.floor(height / 42));
      for (let y = 0; y <= rows; y += 1) {
        for (let x = 0; x <= cols; x += 1) {
          const px = (x / cols) * width;
          const py = (y / rows) * height;
          nodes.push({
            x: px,
            y: py,
            ox: px,
            oy: py,
            r: 1.15 + ((x * 3 + y) % 4) * 0.28,
          });
        }
      }
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = (event.clientX - rect.left) / Math.max(rect.width, 1);
      pointer.ty = (event.clientY - rect.top) / Math.max(rect.height, 1);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;
      const px = pointer.x * width;
      const py = pointer.y * height;

      const glow = ctx.createRadialGradient(px, py, 0, px, py, 220);
      glow.addColorStop(0, "rgba(201, 164, 108, 0.14)");
      glow.addColorStop(0.45, "rgba(143, 212, 208, 0.08)");
      glow.addColorStop(1, "rgba(7, 16, 24, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      for (const node of nodes) {
        if (!reducedMotion) {
          const dx = node.ox - px;
          const dy = node.oy - py;
          const dist = Math.hypot(dx, dy) || 1;
          const pull = Math.max(0, 1 - dist / 210);
          node.x = node.ox + (dx / dist) * pull * 22;
          node.y = node.oy + (dy / dist) * pull * 22;
        } else {
          node.x = node.ox;
          node.y = node.oy;
        }

        const near = Math.max(0, 1 - Math.hypot(node.x - px, node.y - py) / 180);
        ctx.beginPath();
        ctx.fillStyle = `rgba(168, 214, 214, ${0.18 + near * 0.55})`;
        ctx.arc(node.x, node.y, node.r + near * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reducedMotion) {
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i += 5) {
          const a = nodes[i];
          const b = nodes[Math.min(i + 4, nodes.length - 1)];
          const mid = Math.hypot((a.x + b.x) / 2 - px, (a.y + b.y) / 2 - py);
          ctx.strokeStyle = `rgba(201, 164, 108, ${Math.max(0.03, 0.16 - mid / 1400)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      if (!reducedMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    if (reducedMotion) draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
