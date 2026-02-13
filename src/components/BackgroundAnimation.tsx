import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        let time = 0;

        const animate = () => {
            if (!ctx) return;
            time += 0.005; // Slow movement

            // Clear canvas with deep black and slight trail effect
            ctx.fillStyle = '#262626';
            ctx.fillRect(0, 0, width, height);

            ctx.lineWidth = 2;
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#FF4500'; // Orange glow

            // Draw multiple sine waves
            for (let i = 0; i < 5; i++) {
                ctx.beginPath();

                for (let x = 0; x < width; x += 5) {
                    // Complex wave formula: sum of sines
                    const y = height / 2 +
                        Math.sin(x * 0.003 + time + i * 0.5) * 50 +
                        Math.sin(x * 0.007 - time * 0.5 + i) * 30 +
                        Math.sin(x * 0.01 + time * 0.2) * 20;

                    ctx.lineTo(x, y);
                }

                const alpha = 0.5 - (i * 0.1); // Fade out outer waves
                ctx.strokeStyle = `rgba(255, 69, 0, ${alpha})`;
                ctx.stroke();
            }

            requestAnimationFrame(animate);
        };

        const animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            {/* Subtle noise overlay for texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
};

export default BackgroundAnimation;
