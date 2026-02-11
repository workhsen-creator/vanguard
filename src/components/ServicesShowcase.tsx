import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    { name: 'Consumer & Brand', number: '01', id: 'consumer-brand' },
    { name: 'Creative & Content', number: '02', id: 'creative-content' },
    { name: 'Intelligence & Innovation', number: '03', id: 'intelligence-innovation' },
    { name: 'Growth & Performance', number: '04', id: 'growth-performance' },
];

const ServicesShowcase = () => {
    return (
        <section className="py-20 md:py-32 px-6 md:px-20 bg-background border-t border-secondary/10">
            <div className="max-w-[1800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-secondary mb-6">
                        Our Services
                    </h2>
                    <div className="h-[1px] w-full bg-secondary/20" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link
                                to={`/expertise#${service.id}`}
                                className="group relative overflow-hidden bg-secondary/5 border border-secondary/10 hover:border-primary/50 transition-all duration-500 p-8 md:p-12 block"
                            >
                                <div className="relative z-10">
                                    <span className="text-primary/40 text-sm uppercase tracking-widest font-bold">
                                        /{service.number}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-secondary mt-4 mb-6 group-hover:text-primary transition-colors duration-500">
                                        {service.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-secondary/60 group-hover:text-primary transition-colors duration-500">
                                        <span className="text-sm uppercase tracking-wider">Explore</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                                    </div>
                                </div>

                                {/* Hover background effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;
