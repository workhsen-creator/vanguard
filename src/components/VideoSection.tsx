import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(true);

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
                    className="w-full h-full object-cover transition-opacity duration-1000"
                    onLoadedData={() => setIsLoading(false)}
                    style={{ opacity: isLoading ? 0 : 1 }}
                >
                    {/* Video source */}
                    <source src="/background.mp4" type="video/mp4" />
                </video>

                {/* Loading State */}
                {isLoading && (
                    <div className="absolute inset-0 bg-background flex items-center justify-center z-10">
                        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                )}

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-background/60" />
            </div>

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
