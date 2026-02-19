import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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


            <div className="relative z-10 px-6 md:px-20 max-w-[1800px] mx-auto w-full flex flex-col justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8"
                >
                    <h2 className="text-xl md:text-2xl uppercase tracking-widest text-primary/60 font-bold">Our Expertise</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-3"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="block group cursor-default"
                        >
                            <motion.h1
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[4vw] md:text-[5vw] lg:text-[4.5vw] leading-[1.1] font-bold tracking-tight text-secondary uppercase hover:text-primary transition-colors duration-300"
                            >
                                {service.name}
                            </motion.h1>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-12"
                >
                    <Link
                        to="/expertise"
                        className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm hover:text-white transition-colors hover:gap-4 duration-300"
                    >
                        Explore <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}

        </div>
    );
};

export default Hero;
