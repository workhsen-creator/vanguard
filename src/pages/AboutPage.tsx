import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>Vanguard | About Us</title>
                <meta name="description" content="Learn about Vanguard's vision, story, and expertise in PR and communications." />
            </Helmet>

            <div className="min-h-screen bg-background text-secondary">

                {/* 1. Minimal Hero Section */}
                <section className="pt-40 pb-20 md:pt-60 md:pb-40 px-6 md:px-20 max-w-[1800px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <span className="block text-primary text-sm md:text-base tracking-widest uppercase mb-6 md:mb-10 font-bold">
                            Our Vision
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight max-w-5xl">
                            To be the leading PR and communications agency in the MENA region, driving impactful change through creativity, innovation, and <span className="text-primary">trusted partnerships.</span>
                        </h1>
                    </motion.div>
                </section>

                {/* 2. Big Typography Statement */}
                <section className="py-20 px-6 md:px-20 border-t border-white/5">
                    <div className="max-w-[1800px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center text-center py-20 md:py-40"
                        >
                            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter opacity-10 mb-8 select-none">
                                Vanguard
                            </h2>
                            <p className="text-2xl md:text-5xl lg:text-6xl font-light leading-tight max-w-6xl relative z-10">
                                "We believe brands don’t command attention; <span className="text-primary font-normal">they earn it.</span>"
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Split Section (Story) */}
                <section className="py-20 md:py-32 px-6 md:px-20 max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                        {/* Visual / Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-[4/3] bg-white/5 rounded-none md:rounded-3xl overflow-hidden flex items-center justify-center group"
                        >
                            {/* Abstract Visual Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                            <div className="w-1/2 h-1/2 border border-primary/30 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                <div className="w-2/3 h-2/3 border border-white/10 rounded-full" />
                            </div>
                            <span className="absolute bottom-6 left-6 text-xs uppercase tracking-widest text-secondary/40">
                                Our Story
                            </span>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >
                            <h3 className="text-primary text-sm tracking-widest uppercase mb-8 font-bold">
                                Who We Are
                            </h3>
                            <div className="space-y-8 text-lg md:text-xl font-light text-secondary/80 leading-relaxed">
                                <p>
                                    Vanguard, a PR and communications agency based in the MENA region, we don’t just embrace change, we drive it.
                                </p>
                                <p>
                                    Through creative storytelling, fueled by data and technology, we build brands, protect reputations, and earn influence for our clients. Our team partners with innovators and industry leaders to create real value and lasting impact.
                                </p>
                                <p>
                                    We don’t just create moments — we create movements. For and with our people and clients, we move forward, always. Because at Vanguard, it is what matters.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 4. Content Rhythm / Expertise */}
                <section className="py-20 md:py-40 px-6 md:px-20 border-t border-white/5 bg-white/[0.02]">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                            <div className="md:col-span-1">
                                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight sticky top-32">
                                    Core <br /><span className="text-primary">Expertise</span>
                                </h2>
                            </div>
                            <div className="md:col-span-2 grid gap-12">
                                {['Consumer & Brand', 'Creative & Content', 'Intelligence & Innovation'].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="group border-b border-white/10 pb-12 hover:border-primary/50 transition-colors duration-500"
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-2xl md:text-5xl font-light tracking-tight group-hover:text-white transition-colors">
                                                {item}
                                            </h3>
                                            <span className="text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                                →
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                                <div className="mt-8">
                                    <Link to="/expertise" className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm hover:text-white transition-colors hover:gap-4 duration-300">
                                        View Full Services <span className="text-lg">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Minimal CTA */}
                <section className="py-32 md:py-48 px-6 md:px-20 max-w-[1800px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-12">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">move forward?</span>
                        </h2>
                        <Link to="/contact">
                            <button className="group relative px-12 py-5 bg-secondary text-background text-lg md:text-xl font-bold uppercase tracking-widest overflow-hidden rounded-full transition-all hover:scale-105">
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
                                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </button>
                        </Link>
                    </motion.div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
