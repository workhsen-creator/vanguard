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
            <div className="pt-32 px-6 md:px-20 min-h-screen max-w-7xl mx-auto">
                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-40 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter uppercase">
                        Our <span className="text-primary">Vision</span>
                    </h1>
                    <p className="text-2xl md:text-4xl leading-relaxed font-light text-secondary/90">
                        To be the leading PR and communications agency in the MENA region, driving impactful change through creativity, innovation, and trusted partnerships, while building lasting value for our clients and communities.
                    </p>
                </motion.div>

                {/* Video/Animation Placeholder */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full aspect-video bg-white/5 rounded-2xl mb-40 overflow-hidden relative flex justify-center items-center group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay" />
                    {/* Placeholder for video */}
                    <div className="w-24 h-24 rounded-full border-2 border-primary flex justify-center items-center group-hover:scale-110 transition-transform duration-500">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary border-b-[10px] border-b-transparent ml-1" />
                    </div>
                    <p className="absolute bottom-8 left-8 text-sm uppercase tracking-widest text-secondary/60">
                        Play Brand Film
                    </p>
                </motion.div>

                {/* Story Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-10"
                >
                    <div className="md:col-span-4">
                        <h2 className="text-4xl font-bold uppercase tracking-widest text-primary mb-6">Our Story</h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-xl md:text-2xl leading-relaxed text-secondary/80 mb-8">
                            Vanguard, a PR and communications agency based in the MENA region, we don’t just embrace change, we drive it. We believe brands don’t command attention; they earn it.
                        </p>
                        <p className="text-xl md:text-2xl leading-relaxed text-secondary/80 mb-8">
                            Through creative storytelling, fueled by data and technology, we build brands, protect reputations, and earn influence for our clients. Our team partners with innovators and industry leaders to create real value and lasting impact.
                        </p>
                        <p className="text-xl md:text-2xl leading-relaxed text-secondary/80">
                            We don’t just create moments — we create movements. For and with our people and clients, we move forward, always. Because at Vanguard, it is what matters.
                        </p>
                    </div>
                </motion.div>

                {/* Expertise Summary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-40 border-t border-white/10 pt-20"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
                        <h2 className="text-4xl font-bold uppercase tracking-widest text-secondary">Expertise</h2>
                        <Link to="/expertise" className="text-primary uppercase tracking-widest hover:text-white transition-colors mt-4 md:mt-0">
                            View All Services →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Consumer & Brand', 'Creative & Content', 'Intelligence & Innovation'].map((item, i) => (
                            <div key={i} className="py-8 border-b border-white/10">
                                <h3 className="text-2xl font-light">{item}</h3>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary text-black p-20 text-center rounded-3xl mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">READY TO MOVE FORWARD?</h2>
                    <Link to="/contact">
                        <button className="px-10 py-4 bg-black text-white text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full">
                            Let's Talk
                        </button>
                    </Link>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
