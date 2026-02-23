import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [phase, setPhase] = useState<'welcome' | 'sweep' | 'reveal' | 'zoom' | 'exit'>('welcome');

    useEffect(() => {
        // Total duration: 5 seconds
        const timers = [
            setTimeout(() => setPhase('sweep'), 500),    // Quick welcome flash
            setTimeout(() => setPhase('reveal'), 1800),  // 1.3s sweep
            setTimeout(() => setPhase('zoom'), 2500),    // Brief pause then zoom
            setTimeout(() => setPhase('exit'), 3800),    // 1.3s zoom then exit
            setTimeout(onComplete, 5000)                 // Fade out complete at 5s
        ];

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={phase === 'exit'
                ? { opacity: 0, scale: 1.05 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden"
            style={{ willChange: "opacity, transform" }}
        >
            {/* Cinematic Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-100" />

            <motion.div
                className="relative flex flex-col items-center"
                animate={(phase === 'zoom' || phase === 'exit') ? { scale: 1.15 } : { scale: 1 }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                style={{ willChange: "transform" }}
            >
                {/* "Welcome to" - Ghostly Emergence */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(12px)", scale: 1.2 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white text-lg md:text-2xl font-light uppercase tracking-[0.6em] mb-4 select-none"
                >
                    Welcome to
                </motion.div>

                {/* "VANGUARD" - Stabilized Reveal */}
                <div className="relative mb-6">
                    {/* Stable layout base */}
                    <h1 className="text-7xl md:text-11xl font-black uppercase tracking-[0.2em] text-transparent select-none whitespace-nowrap leading-none">
                        VANGUARD
                    </h1>

                    {/* Sweep Layer */}
                    <motion.div
                        className="absolute inset-x-0 top-0 bottom-0 z-20 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={phase === 'sweep' ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Light mask reveal using clip-path */}
                        <motion.h1
                            className="text-7xl md:text-11xl font-black uppercase tracking-[0.2em] text-white/40 whitespace-nowrap leading-none"
                            initial={{ clipPath: 'inset(0 100% 0 0)' }}
                            animate={phase === 'sweep' ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            VANGUARD
                        </motion.h1>

                        {/* The Light Streak */}
                        <motion.div
                            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl z-30"
                            initial={{ left: '-20%' }}
                            animate={phase === 'sweep' ? { left: '120%' } : {}}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                        />
                    </motion.div>

                    {/* Final Resolution Layer (Orange) */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={(phase === 'reveal' || phase === 'zoom' || phase === 'exit') ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 text-7xl md:text-11xl font-black uppercase tracking-[0.2em] text-[#FF6B00] z-10 whitespace-nowrap leading-none"
                        style={{ willChange: "opacity" }}
                    >
                        VANGUARD
                    </motion.h1>
                </div>

                {/* Slogan - "It is what matters" appearing when VANGUARD appears */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={(phase === 'reveal' || phase === 'zoom' || phase === 'exit') ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="text-white text-[10px] md:text-xs uppercase tracking-[0.8em] font-mono select-none"
                >
                    It is what matters
                </motion.div>
            </motion.div>

            {/* Cinematic Letterbox Bars - slide away on exit */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[10vh] bg-black z-30"
                animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-full h-[10vh] bg-black z-30"
                animate={phase === 'exit' ? { y: '100%' } : { y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />
        </motion.div>
    );
};

export default Preloader;
