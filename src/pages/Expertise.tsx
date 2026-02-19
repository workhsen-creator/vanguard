import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { services, sectors } from '../data/services';
import { ArrowUpRight } from 'lucide-react';

/* ─── Easing tokens ─── */
const EASE_EDITORIAL: [number, number, number, number] = [0.22, 0.61, 0.36, 1];
const EASE_OUT: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

/* ─── Gradient Sweep Overlay ───
   A soft orange highlight that sweeps once across the active title.
   Opacity peaks at 8% — "inspiration passing through." */
const GradientSweep = ({ trigger }: { trigger: number }) => {
    return (
        <motion.span
            key={trigger}
            initial={{ opacity: 0, x: '-110%' }}
            animate={{
                opacity: [0, 0.08, 0.08, 0],
                x: ['-110%', '-30%', '30%', '110%'],
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
                position: 'absolute',
                inset: 0,
                background:
                    'linear-gradient(90deg, transparent 0%, #ee7e4b 35%, #ee7e4b 65%, transparent 100%)',
                pointerEvents: 'none' as const,
                mixBlendMode: 'screen' as const,
                willChange: 'transform, opacity',
            }}
            aria-hidden="true"
        />
    );
};

/* ─── Expertise Tab Button ─── */
const ExpertiseTab = ({
    title,
    isActive,
    onClick,
    reducedMotion,
}: {
    title: string;
    isActive: boolean;
    onClick: () => void;
    reducedMotion: boolean | null;
}) => {
    const [sweepKey, setSweepKey] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const prevActiveRef = useRef(isActive);

    // Only trigger sweep when becoming active (not on initial render)
    useEffect(() => {
        if (isActive && !prevActiveRef.current) {
            setSweepKey((k) => k + 1);
        }
        prevActiveRef.current = isActive;
    }, [isActive]);

    // Determine text color: active = orange, hovered = light, default = dim
    const textColor = isActive
        ? '#ee7e4b'
        : isHovered
            ? 'rgba(255,249,240,0.8)'
            : 'rgba(255,249,240,0.35)';

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative text-left py-4 md:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
            {/* Title text */}
            <motion.span
                className="block text-lg md:text-2xl uppercase font-bold whitespace-nowrap"
                style={{ position: 'relative', overflow: 'hidden' }}
                animate={{
                    x: isActive ? 10 : 0,
                    letterSpacing: isActive ? '-0.02em' : '0.1em',
                    color: textColor,
                    opacity: isActive ? 1 : isHovered ? 0.9 : 0.6,
                }}
                transition={{
                    duration: reducedMotion ? 0 : 0.4,
                    ease: EASE_EDITORIAL,
                }}
            >
                {title}

                {/* Gradient sweep — fires once on activation */}
                {isActive && !reducedMotion && <GradientSweep trigger={sweepKey} />}
            </motion.span>

            {/* Orange center-expanding highlight line */}
            <motion.span
                className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                style={{
                    background: '#ee7e4b',
                    transformOrigin: 'center',
                    willChange: 'transform, opacity',
                }}
                initial={false}
                animate={{
                    scaleX: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0,
                }}
                transition={{
                    duration: reducedMotion ? 0 : 0.4,
                    ease: EASE_EDITORIAL,
                }}
            />
        </button>
    );
};

/* ─── Main Page ─── */
const Expertise = () => {
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(0);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        const tabParam = searchParams.get('tab');
        if (tabParam) {
            const index = services.findIndex((s) => s.title === tabParam);
            if (index !== -1) {
                setActiveTab(index);
            }
        }
    }, [searchParams]);

    const handleTabClick = useCallback((index: number) => {
        setActiveTab(index);
    }, []);

    /* ─── Duration multiplier: 0 when reduced-motion preferred ─── */
    const dur = reducedMotion ? 0 : 1;

    /* ─── Exit: fade out + slide down 10px + blur, 300ms ─── */
    const contentExit = {
        opacity: 0,
        y: 10,
        filter: 'blur(2px)',
        transition: { duration: 0.3 * dur, ease: EASE_OUT },
    };

    /* ─── Enter initial: invisible, 20px below, blurred ─── */
    const contentInitial = {
        opacity: 0,
        y: 20,
        filter: 'blur(4px)',
    };

    /* ─── Enter animate: fade in + slide up + blur clears, 600ms ─── */
    const contentAnimate = {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.6 * dur, ease: EASE_OUT },
    };

    return (
        <div className="min-h-screen bg-transparent text-secondary">
            <div className="pt-32 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto min-h-screen flex flex-col">

                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8">
                        Our <span className="text-primary">Expertise</span>
                    </h1>
                </motion.div>

                {/* ─── Navigation Tabs ─── */}
                <div className="border-b border-white/10 mb-16">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-2 w-full pb-2">
                        {services.map((service, index) => (
                            <ExpertiseTab
                                key={index}
                                title={service.title}
                                isActive={activeTab === index}
                                onClick={() => handleTabClick(index)}
                                reducedMotion={reducedMotion}
                            />
                        ))}
                    </div>
                </div>

                {/* ─── Content Area (Full Width) ─── */}
                <div className="flex-1 pb-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={contentInitial}
                            animate={contentAnimate}
                            exit={contentExit}
                            style={{ willChange: 'transform, opacity, filter' }}
                            className="max-w-4xl"
                        >
                            {/* Description paragraph — text emerging from depth */}
                            <motion.p
                                className="text-xl md:text-2xl leading-relaxed text-secondary/80 font-light mb-12"
                                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                    transition: {
                                        duration: 0.6 * dur,
                                        ease: EASE_OUT,
                                        delay: 0.05,
                                    },
                                }}
                            >
                                {services[activeTab].description}
                            </motion.p>

                            {/* Bullet points — staggered horizontal reveal */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                {services[activeTab].items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.35 * dur,
                                                ease: EASE_OUT,
                                                delay: 0.2 + i * 0.08,
                                            },
                                        }}
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                        <span className="text-lg text-secondary/60 group-hover:text-secondary transition-colors">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ─── Sectors Section (untouched) ─── */}
                <div className="mt-20 border-t border-white/10 pt-20 pb-32">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16 text-center">
                        Sectors
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sectors.map((sector, index) => (
                            <div
                                key={index}
                                className="p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05] group cursor-default relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {sector.title}
                                    </h3>
                                    <ArrowUpRight className="text-white/20 group-hover:text-primary transition-colors" size={20} />
                                </div>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <p className="text-sm text-secondary/70 leading-relaxed font-light pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {sector.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Expertise;
