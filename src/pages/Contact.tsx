import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';

const Contact = () => {
    const [state, handleSubmit] = useForm("xpqlygwk");

    return (
        <>
            <Helmet>
                <title>Vanguard | Contact Us</title>
                <meta name="description" content="Get in touch with Vanguard for PR, communications, and brand strategy inquiries." />
            </Helmet>
            <div className="pt-32 px-6 md:px-20 min-h-screen max-w-7xl mx-auto mb-20">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-20 text-secondary tracking-tighter leading-tight uppercase text-center"
                >
                    Welcome to a world <br />
                    <span className="text-primary font-black italic">of potential.</span>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-primary">Get in Touch</h2>

                        <form onSubmit={handleSubmit} className="space-y-8 relative">
                            {/* Honeypot Spam Protection */}
                            <input type="text" name="_gotcha" style={{ display: 'none' }} />

                            <AnimatePresence mode="wait">
                                {state.succeeded ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-primary/10 border border-primary/20 p-10 rounded-2xl text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                            className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-black"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </motion.div>
                                        <h3 className="text-3xl font-bold mb-2 text-white uppercase tracking-tighter">Message Sent!</h3>
                                        <p className="text-secondary/60 text-lg">Your email client is opening now.<br />We'll get back to you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form" className="space-y-8">
                                        {state.errors && state.errors.length > 0 && (
                                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                                <p className="text-red-400 text-sm font-mono">
                                                    {state.errors.map((error: any) => error.message).join(', ')}
                                                </p>
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <label className="text-sm uppercase tracking-widest text-secondary/60">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="w-full bg-transparent border-b border-secondary/20 py-4 text-xl focus:border-primary outline-none transition-colors"
                                                placeholder="Your Name"
                                                required
                                            />
                                            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm uppercase tracking-widest text-secondary/60">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="w-full bg-transparent border-b border-secondary/20 py-4 text-xl focus:border-primary outline-none transition-colors"
                                                placeholder="Your Email"
                                                required
                                            />
                                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm uppercase tracking-widest text-secondary/60">Message</label>
                                            <textarea
                                                name="message"
                                                rows={4}
                                                className="w-full bg-transparent border-b border-secondary/20 py-4 text-xl focus:border-primary outline-none transition-colors resize-none"
                                                placeholder="How can we help?"
                                                required
                                            />
                                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={state.submitting}
                                            className="group relative px-10 py-5 bg-primary text-black font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                {state.submitting ? (
                                                    <>
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                            className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                                                        />
                                                        Processing...
                                                    </>
                                                ) : 'Send Message'}
                                            </span>
                                            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>

                    {/* Right Column: Locations & Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="space-y-20"
                    >
                        {/* Locations */}
                        <div>
                            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-primary">Global Presence</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg text-secondary/80">
                                <div className="p-6 border border-white/5 rounded-xl hover:border-primary/20 transition-colors">
                                    <h3 className="font-bold text-white mb-2 uppercase tracking-tighter">Lebanon (HQ)</h3>
                                    <p className="text-secondary/60">Beirut Central District</p>
                                    <p className="text-secondary/60 text-sm">Lebanon</p>
                                </div>
                                <div className="p-6 border border-white/5 rounded-xl hover:border-primary/20 transition-colors">
                                    <h3 className="font-bold text-white mb-2 uppercase tracking-tighter">Qatar</h3>
                                    <p className="text-secondary/60">Doha Business Hub</p>
                                    <p className="text-secondary/60 text-sm">Qatar</p>
                                </div>
                                <div className="p-6 border border-white/5 rounded-xl hover:border-primary/20 transition-colors">
                                    <h3 className="font-bold text-white mb-2 uppercase tracking-tighter">Iraq</h3>
                                    <p className="text-secondary/60">Baghdad Innovation Center</p>
                                    <p className="text-secondary/60 text-sm">Iraq</p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
                            <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest text-primary">Newsletter</h2>
                            <p className="mb-8 text-secondary/60">Stay ahead of the curve with our weekly insights on PR & Innovation.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    className="flex-1 bg-background border border-white/10 px-6 py-4 rounded-xl outline-none focus:border-primary transition-colors text-lg"
                                    placeholder="your@email.com"
                                />
                                <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-primary transition-colors">
                                    Join
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
