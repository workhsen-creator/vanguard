import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutTeaser = () => {
    return (
        <section className="relative py-32 md:py-48 px-6 md:px-20 overflow-hidden bg-background">

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Floating decorative ring */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-white/[0.03] rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-primary/[0.06] rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Small label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <span className="inline-block text-primary text-xs md:text-sm uppercase tracking-[0.4em] font-medium">
                        Who We Are
                    </span>
                </motion.div>

                {/* Big quote */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl md:text-6xl lg:text-7xl font-light leading-[1.15] tracking-tight text-white/90">
                        We don't just create moments
                        <br />
                        <span className="text-primary font-normal">— we create movements.</span>
                    </h2>
                </motion.div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center text-white/40 text-base md:text-lg max-w-2xl mx-auto mb-14 font-light leading-relaxed"
                >
                    A PR & communications agency in the MENA region, driving impactful change through creativity, innovation, and trusted partnerships.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="text-center"
                >
                    <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                        <motion.button
                            className="group relative px-10 py-4 md:px-14 md:py-5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-white text-sm md:text-base uppercase tracking-[0.3em] font-medium overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary/40"
                            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(238, 126, 75, 0.15)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                                Discover Our Story
                                <motion.span
                                    className="inline-block text-primary text-lg"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    →
                                </motion.span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Bottom decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="mt-20 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                />
            </div>
        </section>
    );
};

export default AboutTeaser;
