import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const TikTokIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const Footer = () => {
    return (
        <section className="py-8 md:py-16 px-6 md:px-20 bg-secondary text-background border-t-2 border-primary/20">
            <div className="max-w-[1800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-4">
                        Let's Create
                        <br />
                        <span className="text-primary">Something Great</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 justify-items-center">
                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center group"
                    >
                        <div className="flex justify-center mb-2">
                            <Mail size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-60">Email</h3>
                        <span className="text-base md:text-lg font-light hover:text-primary transition-colors duration-300">
                            Contact@wearevanguard.co
                        </span>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center group"
                    >
                        <div className="flex justify-center mb-2">
                            <Phone size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-60">Phone</h3>
                        <a
                            href="https://wa.me/96171814551"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base md:text-lg font-light hover:text-primary transition-colors duration-300"
                        >
                            +961 71 814 551
                        </a>
                    </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center gap-6 pt-6 border-t border-background/20 mb-8"
                >
                    <a
                        href="https://www.instagram.com/wearevanguard_?igsh=MWpkb3Y1OWxjOXRnNg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-1"
                    >
                        <Instagram size={20} className="text-background/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                        <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-60 transition-opacity duration-300">Instagram</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/the-vanguard-studio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-1"
                    >
                        <Linkedin size={20} className="text-background/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                        <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-60 transition-opacity duration-300">LinkedIn</span>
                    </a>
                    <a
                        href="https://www.tiktok.com/@lifeatvanguard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-1"
                    >
                        <div className="text-background/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                            <TikTokIcon />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-60 transition-opacity duration-300">TikTok</span>
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61563468455146"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-1"
                    >
                        <Facebook size={20} className="text-background/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                        <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-60 transition-opacity duration-300">Facebook</span>
                    </a>
                </motion.div>

                {/* Footer Navigation */}
                <div className="pt-6 border-t border-background/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                            <Link
                                to="/studiov"
                                className="text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors block"
                            >
                                Studio V
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="/store"
                                className="text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors block"
                            >
                                Store
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="/team"
                                className="text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors block"
                            >
                                Team
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-background/30 uppercase gap-4">
                    <span>© 2026 Vanguard Studio</span>
                    <div className="flex gap-8">
                        <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <span>All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
