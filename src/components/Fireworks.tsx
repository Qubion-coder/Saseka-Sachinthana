import React, { useEffect, useRef } from 'react';

export const Fireworks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let fireworksTimer: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // "Paata patin" - Multicolored palette for bursts
    const colors = [
      '#FF3366', // Pink/Red
      '#4D94FF', // Bright Blue
      '#FFD700', // Gold
      '#20E8B2', // Mint Green
      '#B042FF', // Purple
      '#FF8C00', // Orange
      '#FFFFFF', // White
    ];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      size: number;
      decay: number;
      flicker: boolean;
      type: 'rocket' | 'burst' | 'trail';

      constructor(x: number, y: number, color: string, type: 'rocket' | 'burst' | 'trail' = 'burst') {
        this.x = x;
        this.y = y;
        this.color = color;
        this.type = type;

        if (type === 'rocket') {
          this.vx = (Math.random() - 0.5) * 1.5; 
          // Shoot upwards with enough force to reach upper half of screen
          this.vy = -(Math.random() * 6 + 12); 
          this.alpha = 1;
          this.size = 3;
          this.decay = 0;
          this.flicker = false;
        } else if (type === 'trail') {
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.alpha = 0.7;
          this.size = 1.5;
          this.decay = 0.04; // Fades out quickly
          this.flicker = false;
        } else {
          // Burst
          const theta = Math.random() * Math.PI * 2; 
          const phi = Math.acos((Math.random() * 2) - 1);
          const speed = Math.random() * 5 + 1.5;
          this.vx = Math.sin(phi) * Math.cos(theta) * speed;
          this.vy = Math.sin(phi) * Math.sin(theta) * speed;
          
          this.alpha = 1;
          this.size = Math.random() * 2.5 + 1;
          this.decay = Math.random() * 0.015 + 0.01;
          this.flicker = Math.random() > 0.4;
        }
      }

      update(createBurst: (x: number, y: number, color: string) => void, spawnTrail: (x: number, y: number) => void) {
        if (this.type === 'rocket') {
          this.vy += 0.18; // Gravity for rocket
          this.x += this.vx;
          this.y += this.vy;
          
          // Spawn trail particles behind the rocket
          spawnTrail(this.x, this.y + 5);

          // Explode when it reaches peak height (velocity goes from negative to positive)
          if (this.vy >= -1) {
            this.alpha = 0; // Destroy rocket
            createBurst(this.x, this.y, this.color);
          }
        } else if (this.type === 'trail') {
          this.x += this.vx;
          this.y += this.vy;
          this.alpha -= this.decay;
        } else {
          // Burst particle
          this.vy += 0.05; // Light gravity
          this.vx *= 0.96; // Air resistance (friction)
          this.vy *= 0.96;
          this.x += this.vx;
          this.y += this.vy;
          this.alpha -= this.decay;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.alpha <= 0) return;
        
        ctx.save();
        const currentAlpha = (this.flicker && this.type === 'burst') ? this.alpha * (0.4 + Math.random() * 0.6) : this.alpha;
        ctx.globalAlpha = currentAlpha;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        // Glow effect
        ctx.shadowBlur = this.type === 'trail' ? 5 : 15;
        ctx.shadowColor = this.color;
        
        ctx.fill();
        ctx.restore();
      }
    }

    const launchRocket = () => {
      // Start rocket from bottom of screen
      const x = (Math.random() * 0.6 + 0.2) * canvas.width;
      const y = canvas.height;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new Particle(x, y, color, 'rocket'));
    };

    const spawnTrail = (x: number, y: number) => {
      particles.push(new Particle(x, y, '#FFF3E0', 'trail'));
    };

    const createBurst = (x: number, y: number, baseColor: string) => {
      // Create a multi-colored explosion with the base color as dominant
      for (let i = 0; i < 90; i++) {
        // Mostly use base color, but throw in random colors for "paata patin" effect
        const particleColor = Math.random() > 0.3 ? baseColor : colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, particleColor, 'burst'));
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter(p => p.alpha > 0);
      particles.forEach(p => {
        p.update(createBurst, spawnTrail);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();
    
    // Launch a rocket periodically
    fireworksTimer = window.setInterval(() => {
      const count = Math.random() > 0.7 ? 2 : 1; // Sometimes launch two at once
      for (let i = 0; i < count; i++) {
        setTimeout(launchRocket, Math.random() * 800);
      }
    }, 2500);

    // Launch one immediately
    launchRocket();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(fireworksTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[300] mix-blend-screen opacity-90"
    />
  );
};
