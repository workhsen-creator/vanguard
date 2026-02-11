import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { services, sectors } from '../data/services';

const Expertise = () => {
    // Handle scroll to section on page load if hash is present
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }, []);

    return (
        <>
            <div className="pt-32 px-6 md:px-20 min-h-screen max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-secondary leading-none mb-4">
                        EXPERTISE
                    </h1>
                    <div className="w-full h-[1px] bg-primary/30 my-8"></div>
                </motion.div>

                {/* Services Section */}
                <div className="space-y-40 mb-40">
                    {services.map((service, index) => {
                        const serviceIds = ['consumer-brand', 'creative-content', 'intelligence-innovation', 'growth-performance'];
                        return (
                            <motion.div
                                key={index}
                                id={serviceIds[index]}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-10 scroll-mt-32"
                            >
                                <div>
                                    <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">{service.title}</h2>
                                    <ul className="space-y-4">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="text-lg md:text-xl text-secondary/70 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xl md:text-2xl leading-relaxed text-secondary/90">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Sectors Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tighter">
                        SECTORS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {sectors.map((sector, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="border border-white/10 p-8 hover:bg-white/5 transition-colors duration-300"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-primary">{sector.title}</h3>
                                <p className="text-secondary/70 leading-relaxed text-sm">
                                    {sector.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default Expertise;
