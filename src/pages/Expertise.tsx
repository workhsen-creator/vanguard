import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Footer from '../components/Footer';
import { services, sectors } from '../data/services';
import { ArrowUpRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   EASING & TIMING TOKENS
   ───────────────────────────────────────────── */
const EASE_EDITORIAL: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

/* ─────────────────────────────────────────────
   REVEAL PATTERNS
   Each service block enters the viewport
   with a different directional animation.
   ───────────────────────────────────────────── */
const REVEAL_VARIANTS: Array<{ initial: Record<string, number>; animate: Record<string, number> }> = [
    { initial: { x: -60, opacity: 0 }, animate: { x: 0, opacity: 1 } },   // 1 → slide from left
    { initial: { x: 60, opacity: 0 }, animate: { x: 0, opacity: 1 } },    // 2 → slide from right
    { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } },    // 3 → fade up
    { initial: { scale: 0.96, opacity: 0 }, animate: { scale: 1, opacity: 1 } }, // 4 → scale in
];

/* ─────────────────────────────────────────────
   SERVICE BLOCK
   Glass-panel storytelling block for each
   service category. Animates once on scroll.
   ───────────────────────────────────────────── */
interface ServiceBlockProps {
    service: { title: string; description: string; items: string[] };
    index: number;
    reducedMotion: boolean | null;
    blockRef: (el: HTMLDivElement | null) => void;
}

const ServiceBlock = ({ service, index, reducedMotion, blockRef }: ServiceBlockProps) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(internalRef, { once: true, margin: '0px 0px -120px 0px' });

    const variant = REVEAL_VARIANTS[index % REVEAL_VARIANTS.length];
    const shouldAnimate = !reducedMotion;
    const isVisible = shouldAnimate ? isInView : true;

    // Merge refs
    const setRefs = useCallback(
        (el: HTMLDivElement | null) => {
            (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
            blockRef(el);
        },
        [blockRef],
    );

    return (
        <motion.div
            ref={setRefs}
            initial={shouldAnimate ? variant.initial : false}
            animate={isVisible ? variant.animate : variant.initial}
            transition={{
                duration: shouldAnimate ? 0.7 : 0,
                ease: EASE_EDITORIAL,
            }}
            style={{ willChange: shouldAnimate ? 'transform, opacity' : 'auto' }}
            className="relative group"
        >
            {/* ── Glass panel ── */}
            <div
                className="rounded-2xl transition-shadow duration-500"
                style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255,140,0,0.2)',
                    padding: 'clamp(32px, 5vw, 72px)',
                    boxShadow: '0 0 0px transparent',
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                        '0 0 40px rgba(238,126,75,0.06)';
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0px transparent';
                }}
            >
                {/* ── Service number ── */}
                <span className="block text-sm font-mono text-primary/40 uppercase tracking-[0.3em] mb-6">
                    {String(index + 1).padStart(2, '0')}
                </span>

                {/* ── Title + orange underline ── */}
                <div className="relative mb-8 inline-block">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-white leading-[1.1]">
                        {service.title}
                    </h2>
                    {/* Orange underline — scaleX 0 → 1 */}
                    <motion.div
                        className="h-[2px] mt-3 origin-left"
                        style={{ background: '#ee7e4b' }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={
                            isVisible
                                ? { scaleX: 1, opacity: 1 }
                                : { scaleX: 0, opacity: 0 }
                        }
                        transition={{
                            duration: shouldAnimate ? 0.6 : 0,
                            ease: EASE_EDITORIAL,
                            delay: shouldAnimate ? 0.3 : 0,
                        }}
                    />
                </div>

                {/* ── Description ── */}
                <motion.p
                    className="text-lg md:text-xl lg:text-2xl leading-relaxed text-secondary/70 font-light max-w-3xl mb-12"
                    initial={{ opacity: 0, y: 16 }}
                    animate={
                        isVisible
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 16 }
                    }
                    transition={{
                        duration: shouldAnimate ? 0.6 : 0,
                        ease: EASE_EDITORIAL,
                        delay: shouldAnimate ? 0.25 : 0,
                    }}
                >
                    {service.description}
                </motion.p>

                {/* ── Bullet items — staggered reveal ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
                    {service.items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-3 group/item"
                            initial={{ opacity: 0, x: 10 }}
                            animate={
                                isVisible
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: 10 }
                            }
                            transition={{
                                duration: shouldAnimate ? 0.4 : 0,
                                ease: EASE_EDITORIAL,
                                delay: shouldAnimate ? 0.4 + i * 0.08 : 0,
                            }}
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors flex-shrink-0" />
                            <span className="text-base md:text-lg text-secondary/55 group-hover/item:text-secondary transition-colors duration-300">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

/* ─────────────────────────────────────────────
   SCROLL PROGRESS INDICATOR
   Fixed sidebar on desktop showing which
   service block is currently in viewport.
   ───────────────────────────────────────────── */
interface ProgressIndicatorProps {
    activeIndex: number;
    reducedMotion: boolean | null;
}

const ScrollProgressIndicator = ({ activeIndex, reducedMotion }: ProgressIndicatorProps) => {
    return (
        <div className="hidden lg:flex fixed right-8 xl:right-12 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-5">
            {services.map((service, i) => {
                const isActive = i === activeIndex;
                return (
                    <a
                        key={i}
                        href={`#service-${i}`}
                        className="flex items-center gap-3 group/nav no-underline"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(`service-${i}`)?.scrollIntoView({
                                behavior: reducedMotion ? 'auto' : 'smooth',
                                block: 'center',
                            });
                        }}
                    >
                        {/* Service name */}
                        <span
                            className="text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 whitespace-nowrap"
                            style={{
                                color: isActive ? '#ee7e4b' : 'rgba(255,249,240,0.25)',
                                opacity: isActive ? 1 : 0.7,
                            }}
                        >
                            {service.title}
                        </span>

                        {/* Dot indicator */}
                        <motion.div
                            className="rounded-full flex-shrink-0"
                            animate={{
                                width: isActive ? 8 : 4,
                                height: isActive ? 8 : 4,
                                backgroundColor: isActive
                                    ? '#ee7e4b'
                                    : 'rgba(255,249,240,0.2)',
                            }}
                            transition={{
                                duration: reducedMotion ? 0 : 0.3,
                                ease: EASE_EDITORIAL,
                            }}
                        />
                    </a>
                );
            })}
        </div>
    );
};

/* ─────────────────────────────────────────────
   EXPERTISE PAGE — MAIN COMPONENT
   ───────────────────────────────────────────── */
const Expertise = () => {
    const reducedMotion = useReducedMotion();
    const [activeBlockIndex, setActiveBlockIndex] = useState(0);
    const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

    /* ── Store refs for each service block ── */
    const setBlockRef = useCallback(
        (index: number) => (el: HTMLDivElement | null) => {
            blockRefs.current[index] = el;
        },
        [],
    );

    /* ── IntersectionObserver for progress indicator ── */
    useEffect(() => {
        const elements = blockRefs.current.filter(Boolean) as HTMLDivElement[];
        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry most visible or closest to center
                let bestIndex = activeBlockIndex;
                let bestRatio = 0;

                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
                        const idx = elements.indexOf(entry.target as HTMLDivElement);
                        if (idx !== -1) {
                            bestRatio = entry.intersectionRatio;
                            bestIndex = idx;
                        }
                    }
                });

                if (bestRatio > 0) {
                    setActiveBlockIndex(bestIndex);
                }
            },
            {
                threshold: [0.1, 0.3, 0.5, 0.7],
                rootMargin: '-20% 0px -20% 0px',
            },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [activeBlockIndex]);

    /* ── Memoize services list to avoid re-renders ── */
    const servicesList = useMemo(() => services, []);

    return (
        <div className="min-h-screen bg-transparent text-secondary">
            {/* Progress Indicator (fixed, desktop only) */}
            <ScrollProgressIndicator
                activeIndex={activeBlockIndex}
                reducedMotion={reducedMotion}
            />

            <div className="pt-32 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto flex flex-col">

                {/* ─── Page Header ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 md:mb-32"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8">
                        Our <span className="text-primary">Expertise</span>
                    </h1>
                </motion.div>

                {/* ─── Vertical Storytelling Blocks ─── */}
                <div className="flex flex-col" style={{ gap: 'clamp(80px, 10vw, 140px)' }}>
                    {servicesList.map((service, index) => (
                        <div key={index} id={`service-${index}`}>
                            <ServiceBlock
                                service={service}
                                index={index}
                                reducedMotion={reducedMotion}
                                blockRef={setBlockRef(index)}
                            />
                        </div>
                    ))}
                </div>

                {/* ─── Sectors Section (unchanged) ─── */}
                <div className="mt-32 border-t border-white/10 pt-20 pb-32">
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
