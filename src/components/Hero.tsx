import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    { name: 'Consumer & Brand', id: 'consumer-brand' },
    { name: 'Creative & Content', id: 'creative-content' },
    { name: 'Intelligence & Innovation', id: 'intelligence-innovation' },
    { name: 'Growth & Performance', id: 'growth-performance' },
];

const Hero = () => {
    const container = useRef(null);

    return (
        <div ref={container} className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background">
            {/* Orange decorative lines */}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-[2px] h-[60vh] bg-gradient-to-b from-transparent via-primary to-transparent origin-top"
            />
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-[2px] h-[60vh] bg-gradient-to-b from-transparent via-primary to-transparent origin-top"
            />

            <div className="relative z-10 px-6 md:px-20 max-w-[1800px] mx-auto w-full flex flex-col justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8"
                >
                    <h2 className="text-xl md:text-2xl uppercase tracking-widest text-primary/60 font-bold">Our Services</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-3"
                >
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={`/expertise#${service.id}`}
                            className="block group"
                        >
                            <motion.h1
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[4vw] md:text-[5vw] lg:text-[4.5vw] leading-[1.1] font-bold tracking-tight text-secondary uppercase hover:text-primary transition-colors duration-300"
                            >
                                {service.name}
                            </motion.h1>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-secondary/40"
                >
                    <span className="text-sm uppercase tracking-widest">Scroll</span>
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
