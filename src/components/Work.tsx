import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Mare Wines",
        category: "Branding / Web",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2576&auto=format&fit=crop", // Placeholder
        year: "2024"
    },
    {
        id: 2,
        title: "Ranch Barba Tone",
        category: "Development",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2670&auto=format&fit=crop", // Placeholder
        year: "2023"
    },
    {
        id: 3,
        title: "Veralda",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2670&auto=format&fit=crop", // Placeholder
        year: "2023"
    },
    {
        id: 4,
        title: "KPA Rovinj",
        category: "Visual Identity",
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2670&auto=format&fit=crop", // Placeholder
        year: "2022"
    }
];

const Work = () => {
    return (
        <div className="py-20 px-6 md:px-20 w-full min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`group flex flex-col gap-4 ${index % 2 === 1 ? 'md:mt-32' : ''}`}
                    >
                        <div className="overflow-hidden w-full aspect-[4/5] relative">
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover origin-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <h3 className="text-3xl md:text-4xl font-bold text-secondary">{project.title}</h3>
                                <span className="p-3 rounded-full border border-white/20 group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-colors duration-300">
                                    <ArrowUpRight size={20} />
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-secondary/50 pt-2">
                                <span>{project.category}</span>
                                <span>{project.year}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Work;
