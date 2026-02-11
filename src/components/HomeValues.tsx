import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HomeValues = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={container} className="py-32 px-6 md:px-20 bg-secondary text-background relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row gap-20">
                    <motion.div
                        style={{ y }}
                        className="w-full md:w-1/3"
                    >
                        <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-primary">Our Philosophy</h3>
                        <div className="h-[1px] w-full bg-primary/30 mb-8" />
                        <p className="text-lg opacity-80 leading-relaxed">
                            In a world of noise, we design silence. We strip away the unnecessary to reveal the essential. Every pixel serves a purpose, every interaction tells a story.
                        </p>
                    </motion.div>

                    <div className="w-full md:w-2/3">
                        <div className="space-y-12">
                            {['Vision', 'Clarity', 'Impact'].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="group cursor-pointer"
                                >
                                    <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter hover:text-primary transition-colors duration-500">
                                        {item}
                                    </h2>
                                    <div className="h-[1px] w-full bg-background/20 group-hover:bg-primary transition-colors duration-500 mt-8" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeValues;
