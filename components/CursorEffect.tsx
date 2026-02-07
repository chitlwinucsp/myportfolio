import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

interface Point {
  x: number;
  y: number;
  age: number;
}

export const CursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const trail = useRef<Point[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      // Add point to trail
      trail.current.push({ x: e.clientX, y: e.clientY, age: 1.0 });
    };

    const onClick = (e: MouseEvent) => {
      // Firework explosion
      const colors = ['#6366f1', '#ec4899', '#8b5cf6', '#3b82f6', '#06b6d4', '#ffffff'];
      const particleCount = 24;
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = Math.random() * 4 + 2;
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1.0,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onClick);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- 1. Signal Stream Trail ---
      // Filter out old points
      trail.current = trail.current.filter(p => p.age > 0);
      
      // Decay - Slower decay for longer trail (0.02 vs 0.08)
      trail.current.forEach(p => p.age -= 0.02); 

      if (trail.current.length > 1) {
        ctx.beginPath();
        
        // Use more points for smoother, longer curve
        // Slice larger window to accommodate slower decay
        const pathPoints = trail.current.slice(-50);
        
        if (pathPoints.length > 0) {
            ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
            
            for (let i = 1; i < pathPoints.length - 1; i++) {
                const p1 = pathPoints[i];
                const p2 = pathPoints[i + 1];
                const xc = (p1.x + p2.x) / 2;
                const yc = (p1.y + p2.y) / 2;
                ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
            }
            // Connect to last known point
            const last = pathPoints[pathPoints.length - 1];
            ctx.lineTo(last.x, last.y);

            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.lineWidth = 4; // Increased width
            
            // Create gradient
            const gradient = ctx.createLinearGradient(
                pathPoints[0].x, pathPoints[0].y,
                last.x, last.y
            );
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0)');
            gradient.addColorStop(0.2, 'rgba(99, 102, 241, 0.5)');
            gradient.addColorStop(0.6, 'rgba(236, 72, 153, 0.8)');
            gradient.addColorStop(1, '#ffffff');

            ctx.strokeStyle = gradient;
            ctx.shadowBlur = 15; // Stronger glow
            ctx.shadowColor = '#ec4899';
            ctx.stroke();
            ctx.shadowBlur = 0;
        }
      }

      // --- 2. Firework Particles ---
      particles.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15; // Gravity
        p.life -= 0.02; // Slower fade for particles
        
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2); // Slightly larger particles
        ctx.fill();
        
        // Add sparkle/glow to particles
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      ctx.globalAlpha = 1.0;
      particles.current = particles.current.filter(p => p.life > 0);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
};