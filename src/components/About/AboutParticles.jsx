"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "#0ff",
  "#9b5de5",
  "#10b981",
  "#f43f5e",
  "#f59e0b",
  "#06b6d4",
  "#ec4899",
  "#8b5cf6",
  "#22d3ee",
  "#a3e635",
  "#fb923c",
  "#e879f9",
  "#34d399",
  "#facc15",
  "#ffffff",
];

const PARTICLE_COUNT = 60;
const MIN_SPEED = 0.3;
const MAX_SPEED = 1.2;
const MIN_SIZE = 1.2;
const MAX_SIZE = 3.5;

function AboutParticles() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        const rect = canvas.getBoundingClientRect();
        const side = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left

        switch (side) {
          case 0: // top
            this.x = Math.random() * rect.width;
            this.y = 0;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
            break;
          case 1: // right
            this.x = rect.width;
            this.y = Math.random() * rect.height;
            this.vx = -(MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED));
            this.vy = (Math.random() - 0.5) * 0.5;
            break;
          case 2: // bottom
            this.x = Math.random() * rect.width;
            this.y = rect.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = -(MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED));
            break;
          default: // left
            this.x = 0;
            this.y = Math.random() * rect.height;
            this.vx = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
            this.vy = (Math.random() - 0.5) * 0.5;
        }

        this.size = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.opacity = 0.2 + Math.random() * 0.5;
        this.life = 0;
        this.maxLife = 150 + Math.random() * 150;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Mouse attraction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          this.vx += (dx / dist) * 0.03;
          this.vy += (dy / dist) * 0.03;
        }

        // Reset when out of bounds or life ended
        const rect = canvas.getBoundingClientRect();
        if (
          this.x < -30 ||
          this.x > rect.width + 30 ||
          this.y < -30 ||
          this.y > rect.height + 30 ||
          this.life > this.maxLife
        ) {
          this.reset();
        }
      }

      draw(ctx) {
        const alpha = this.opacity * (1 - this.life / this.maxLife);

        // Glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha * 0.25;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        ctx.globalAlpha = 1;
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      particlesRef.current.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouse);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouse);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export default AboutParticles;
