import { motion } from 'framer-motion';

const ServicesMarquee = () => {
    const services = [
        "Digital Strategy", "Brand Identity", "Web Development", "UI/UX Design",
        "Motion Graphics", "Content Creation", "Social Media", "Art Direction",
        "Digital Strategy", "Brand Identity", "Web Development", "UI/UX Design",
        "Motion Graphics", "Content Creation", "Social Media", "Art Direction"
    ];

    return (
        <section className="py-20 bg-background overflow-hidden border-t border-secondary/10">
            <div className="relative flex overflow-x-hidden">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex items-center gap-16 whitespace-nowrap"
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-5xl md:text-7xl font-bold text-secondary/10 uppercase tracking-tighter hover:text-secondary/80 transition-colors duration-300">
                                {service}
                            </span>
                            <div className="w-4 h-4 rounded-full bg-primary" />
                        </div>
                    ))}
                </motion.div>
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />
            </div>
        </section>
    );
};

export default ServicesMarquee;
