import { motion } from 'framer-motion';
import { useRef } from 'react';

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    {/* Video source */}
                    <source src="/background.mp4" type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-background/60" />
            </div>

            {/* Orange decorative lines - positioned closer to text */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[5%] md:left-[12%] lg:left-[18%] top-1/2 -translate-y-1/2 h-[2px] w-[18vw] md:w-[12vw] lg:w-[10vw] bg-gradient-to-r from-transparent via-primary to-primary origin-left"
            />
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-[5%] md:right-[12%] lg:right-[18%] top-1/2 -translate-y-1/2 h-[2px] w-[18vw] md:w-[12vw] lg:w-[10vw] bg-gradient-to-l from-transparent via-primary to-primary origin-right"
            />

            {/* Centered Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative z-10 text-center px-6 max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary leading-tight">
                    We see no limits to the change we can create when{' '}
                    <span className="text-primary">authenticity</span> leads the way.
                </h2>
            </motion.div>
        </section>
    );
};

export default VideoSection;
