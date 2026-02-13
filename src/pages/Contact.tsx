import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const Contact = () => {
    const [state, handleSubmit] = useForm("xpqlygwk");

    return (
        <>
            <Helmet>
                <title>Vanguard | Contact Us</title>
                <meta name="description" content="Get in touch with Vanguard for PR, communications, and brand strategy inquiries." />
            </Helmet>

            <div className="pt-32 px-5 md:px-10 lg:px-20 min-h-screen max-w-[1200px] mx-auto mb-20 relative">
                {/* Glowing Background Element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

                {/* Top Section: Emotional Headline */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight uppercase text-secondary drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Say Helloo and let’s get started on your <span className="text-primary inline-block drop-shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.5)]">next project!</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {/* Left Side: Minimal Tech Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-16">
                            {/* Honeypot Spam Protection */}
                            <input type="text" name="_gotcha" style={{ display: 'none' }} />

                            <AnimatePresence mode="wait">
                                {state.succeeded ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-primary/5 border border-primary/20 p-8 rounded-xl text-center backdrop-blur-sm"
                                    >
                                        <h3 className="text-2xl font-bold mb-2 text-primary uppercase tracking-widest">Message Sent</h3>
                                        <p className="text-secondary/70">We'll be in touch shortly.</p>
                                    </motion.div>
                                ) : (
                                    <div className="space-y-8">
                                        <div className="group relative">
                                            <label className="block text-sm font-medium text-secondary/60 mb-2 uppercase tracking-widest">What's your name?</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="w-full bg-transparent border-b border-white/20 py-8 text-xl md:text-2xl text-secondary focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-white/20"
                                                placeholder="Name Surname"
                                                required
                                            />
                                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-500 ease-out shadow-[0_0_10px_var(--color-primary)]" />
                                            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-2 block" />
                                        </div>

                                        <div className="group relative">
                                            <label className="block text-sm font-medium text-secondary/60 mb-2 uppercase tracking-widest">Where can we email you?</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="w-full bg-transparent border-b border-white/20 py-8 text-xl md:text-2xl text-secondary focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-white/20"
                                                placeholder="name@example.com"
                                                required
                                            />
                                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-500 ease-out shadow-[0_0_10px_var(--color-primary)]" />
                                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-2 block" />
                                        </div>

                                        <div className="group relative">
                                            <label className="block text-sm font-medium text-secondary/60 mb-2 uppercase tracking-widest">How can we help?</label>
                                            <textarea
                                                name="message"
                                                rows={1}
                                                className="w-full bg-transparent border-b border-white/20 py-8 text-xl md:text-2xl text-secondary focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-white/20 resize-none min-h-[80px]"
                                                placeholder="Your message..."
                                                required
                                            />
                                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-500 ease-out shadow-[0_0_10px_var(--color-primary)]" />
                                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-2 block" />
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={state.submitting}
                                                className="relative px-8 py-4 bg-transparent border border-white/20 hover:border-primary text-secondary hover:text-primary font-bold uppercase tracking-[0.2em] transition-all duration-300 group overflow-hidden"
                                            >
                                                <span className="relative z-10 flex items-center gap-3">
                                                    {state.submitting ? 'Sending...' : 'Send it'}
                                                </span>
                                                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>

                    {/* Right Side: Contact Info Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="space-y-12 md:pl-10"
                    >
                        <div className="space-y-12">
                            <div className="group">
                                <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Details</h3>
                                <div className="space-y-4">
                                    <a href="mailto:Contact@wearevanguard.co" className="flex items-center gap-4 text-lg md:text-xl font-light hover:text-primary transition-colors text-secondary group/link">
                                        <Mail size={18} className="text-primary/70 group-hover/link:text-primary transition-colors" />
                                        Contact@wearevanguard.co
                                    </a>
                                    <a href="tel:+96171814551" className="flex items-center gap-4 text-lg md:text-xl font-light hover:text-primary transition-colors text-secondary group/link">
                                        <Phone size={18} className="text-primary/70 group-hover/link:text-primary transition-colors" />
                                        +961 71 814 551
                                    </a>
                                </div>
                            </div>

                            <div className="group">
                                <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Connect</h3>
                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/lifeatvanguard.lb?igsh=MWpkb3Y1OWxjOXRnNg==" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-all duration-300 group/icon">
                                        <Instagram size={20} className="group-hover/icon:scale-110 transition-transform" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/the-vanguard-studio/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-all duration-300 group/icon">
                                        <Linkedin size={20} className="group-hover/icon:scale-110 transition-transform" />
                                    </a>
                                    <a href="https://www.tiktok.com/@lifeatvanguard" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-all duration-300 group/icon">
                                        <TikTokIcon />
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61563468455146" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-all duration-300 group/icon">
                                        <Facebook size={20} className="group-hover/icon:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            <div className="group">
                                <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Location</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 text-secondary/70">
                                        <MapPin size={18} className="text-primary/70 mt-1 shrink-0" />
                                        <div>
                                            <p className="text-lg text-white">Beirut</p>
                                            <p className="text-sm opacity-60">Lebanon (HQ)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Section: World of Potential */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="py-32 px-6 md:px-20 lg:px-32 bg-transparent border-t border-white/5"
            >
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col items-start gap-6">
                        <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide">
                            Welcome to a world of <span className="text-primary italic">potential</span>
                        </h2>

                        <div className="flex items-center gap-6 md:gap-8 text-xs uppercase tracking-[0.3em] text-secondary/60 font-medium">
                            <span className="hover:text-primary transition-colors duration-300">Lebanon</span>
                            <span className="text-primary/40">•</span>
                            <span className="hover:text-primary transition-colors duration-300">Qatar</span>
                            <span className="text-primary/40">•</span>
                            <span className="hover:text-primary transition-colors duration-300">Iraq</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <Footer />
        </>
    );
};

export default Contact;
