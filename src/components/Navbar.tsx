import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const TikTokIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and past 100px
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const menuItems = [
        { title: "Home", href: "/" },
        { title: "Our Work", href: "/work" },
        { title: "Expertise", href: "/expertise" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" }
    ];

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : -20
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-8 mix-blend-difference text-secondary pointer-events-none"
            >
                <Link
                    to="/"
                    className="relative z-[60] pointer-events-auto h-28 flex items-center overflow-hidden"
                >
                    <motion.img
                        key="main-logo-img"
                        src="/logo.png"
                        alt="Vanguard"
                        className="h-full w-auto object-contain"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors cursor-pointer group relative z-[60] pointer-events-auto"
                >
                    <span className="hidden md:block group-hover:-translate-x-1 transition-transform">
                        {isOpen ? 'Close' : 'Menu'}
                    </span>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center text-secondary"
                    >
                        <div className="flex flex-col gap-4 items-center">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.href}
                                    onClick={() => {
                                        setIsOpen(false);
                                        window.scrollTo(0, 0);
                                    }}
                                    className="block overflow-hidden"
                                >
                                    <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 100, opacity: 0 }}
                                        transition={{ delay: 0.1 * index, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-3xl md:text-5xl font-bold uppercase tracking-tighter hover:text-primary transition-colors cursor-pointer"
                                    >
                                        {item.title}
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute bottom-10 left-10 md:left-20 flex gap-6 text-secondary/50"
                        >
                            <a href="https://www.instagram.com/wearevanguard_?igsh=MWpkb3Y1OWxjOXRnNg==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer" aria-label="Instagram">
                                <Instagram size={32} />
                            </a>
                            <a href="https://www.linkedin.com/company/the-vanguard-studio/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer" aria-label="LinkedIn">
                                <Linkedin size={32} />
                            </a>
                            <a href="https://www.tiktok.com/@lifeatvanguard" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer" aria-label="TikTok">
                                <TikTokIcon />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61563468455146" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer" aria-label="Facebook">
                                <Facebook size={32} />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
