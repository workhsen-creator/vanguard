import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WelcomeSection = () => {
    return (
        <section className="py-32 md:py-40 px-6 md:px-20 bg-secondary text-background relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                >
                    Welcome to the future of digital design.
                    <br />
                    <span className="text-primary">Feel at home with Vanguard.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl opacity-80 mb-12 max-w-2xl mx-auto"
                >
                    We partner with ambitious brands to create digital experiences that inspire, engage, and convert.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        to="/about"
                        className="inline-flex items-center gap-3 bg-background text-secondary px-10 py-5 text-lg font-bold uppercase tracking-wider hover:bg-primary hover:text-background transition-all duration-300 transform hover:scale-105 group"
                    >
                        Know More
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </motion.div>
            </div>

            {/* Decorative background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
        </section>
    );
};

export default WelcomeSection;
