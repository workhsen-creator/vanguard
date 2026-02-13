import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

// Portfolio items
const portfolioItems = [
    {
        title: 'Coming Soon',
        category: 'Development',
        image: 'project1',
        color: '#667eea'
    },
    {
        title: 'Coming Soon',
        category: 'Branding',
        image: 'project2',
        color: '#f093fb'
    },
    {
        title: 'Coming Soon',
        category: 'Design',
        image: 'project3',
        color: '#4facfe'
    },
    {
        title: 'Coming Soon',
        category: 'Innovation',
        image: 'project4',
        color: '#43e97b'
    },
];

const PortfolioGrid = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-20 md:py-32 px-6 md:px-20 bg-background">
            <div className="max-w-[1800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-secondary mb-6">
                        Recent Work
                    </h2>
                    <div className="h-[1px] w-full bg-secondary/20" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-secondary/5"
                        >
                            {/* Image background with gradient */}
                            <div
                                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                style={{
                                    background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                                }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/80 transition-all duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                                {/* Category tag */}
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{
                                        opacity: hoveredIndex === index ? 1 : 0.6,
                                        y: hoveredIndex === index ? 0 : -20
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="self-start"
                                >
                                    <span className="text-primary text-sm uppercase tracking-wider font-bold border border-primary/30 px-4 py-2 inline-block">
                                        /{item.category}
                                    </span>
                                </motion.div>

                                {/* Title and discover button */}
                                <div>
                                    <motion.h3
                                        initial={{ opacity: 0.8 }}
                                        animate={{
                                            opacity: hoveredIndex === index ? 1 : 0.8,
                                        }}
                                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight"
                                    >
                                        {item.title}
                                    </motion.h3>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{
                                            opacity: hoveredIndex === index ? 1 : 0,
                                            x: hoveredIndex === index ? 0 : -20
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="inline-flex items-center gap-2 text-secondary text-lg font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300"
                                    >
                                        <span>Coming Soon</span>
                                        <ArrowUpRight size={24} />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Border effect on hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <a
                        href="/work"
                        className="inline-flex items-center gap-3 bg-transparent text-secondary border-2 border-secondary/20 hover:border-primary hover:text-primary px-10 py-5 text-lg font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 group"
                    >
                        View All Work
                        <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
