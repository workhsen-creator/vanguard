import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Footer from '../components/Footer';
import { services, sectors } from '../data/services';
import { ArrowUpRight } from 'lucide-react';

const TechCircle = ({ isActive }: { isActive: boolean }) => {
    return (
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-white/10 rounded-full border-dashed"
            />

            {/* Middle Rotating Ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-primary/20 rounded-full"
            />

            {/* Active Indicator Ring */}
            <motion.div
                initial={false}
                animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-12 border-2 border-primary/50 rounded-full"
            />

            {/* Core */}
            <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(238,126,75,0.8)]" />
        </div>
    );
};

const Expertise = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="min-h-screen bg-background text-secondary">
            <div className="pt-32 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto min-h-screen flex flex-col">

                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8">
                        Our Expertise
                    </h1>
                </motion.div>

                {/* Navigation Tabs */}
                <div className="border-b border-white/10 mb-16 overflow-x-auto no-scrollbar">
                    <div className="flex gap-8 md:gap-16 min-w-max pb-4">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`relative text-lg md:text-xl uppercase tracking-widest font-bold pb-4 transition-colors duration-300 ${activeTab === index ? 'text-primary' : 'text-secondary/40 hover:text-secondary'
                                    }`}
                            >
                                {service.title}
                                {activeTab === index && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 pb-20">

                    {/* Visual Side (Left) */}
                    <div className="lg:col-span-5 flex items-center justify-center lg:justify-start">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                            >
                                <TechCircle isActive={true} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Text Content (Right) */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 text-white">
                                    {services[activeTab].title}
                                </h2>
                                <p className="text-xl md:text-2xl leading-relaxed text-secondary/80 font-light mb-12">
                                    {services[activeTab].description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                    {services[activeTab].items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
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
                </div>

                {/* Sectors Section (Kept simpler but matching style) */}
                <div className="mt-20 border-t border-white/10 pt-20 pb-32">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16 text-center">
                        Sectors
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sectors.map((sector, index) => (
                            <div
                                key={index}
                                className="p-8 border border-white/5 hover:border-primary/30 transition-colors duration-300 bg-white/[0.02] group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {sector.title}
                                    </h3>
                                    <ArrowUpRight className="text-white/20 group-hover:text-primary transition-colors" size={20} />
                                </div>
                                <p className="text-sm text-secondary/50 leading-relaxed font-light">
                                    {sector.description}
                                </p>
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
