import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';

// Project Data
// Using high-quality unsplash images for premium feel
const projects = [
    {
        id: 1,
        title: "Lumina Sanctum",
        category: "Digital Experience",
        year: "2025",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
        description: "Immersive light installation branding"
    },
    {
        id: 2,
        title: "Vortex Financial",
        category: "Fintech Branding",
        year: "2024",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2700&auto=format&fit=crop",
        description: "Future-forward banking identity"
    },
    {
        id: 3,
        title: "Æther",
        category: "Web Development",
        year: "2024",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2700&auto=format&fit=crop",
        description: "WebGL powered aerospace platform"
    },
    {
        id: 4,
        title: "Mono",
        category: "Product Design",
        year: "2023",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        description: "Minimalist audio equipment series"
    }
];

const ProjectItem = ({ project }: { project: typeof projects[0] }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full mb-32 last:mb-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 px-2 border-b border-white/10 pb-8">
                <div>
                    <div className="overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="block text-primary text-sm md:text-base font-mono mb-2"
                        >
                            {project.year} / {project.category}
                        </motion.span>
                    </div>
                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-secondary uppercase tracking-tight leading-none group-hover:text-primary transition-colors duration-500">
                        {project.title}
                    </h2>
                </div>

                <div className="mt-6 md:mt-0 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-secondary text-sm uppercase tracking-widest hidden md:block">View Case</span>
                    <div className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center bg-secondary/5 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <ArrowUpRight className="text-secondary group-hover:text-black transition-colors" size={20} />
                    </div>
                </div>
            </div>

            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-white/5">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent z-10 transition-colors duration-500" />

                <motion.div
                    className="w-full h-full"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

const Work = () => {
    return (
        <div className="min-h-screen bg-background text-secondary">
            <main className="px-6 md:px-12 lg:px-24 pt-40 pb-20">
                {/* Page Header */}
                <header className="mb-32 md:mb-48">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-secondary uppercase opacity-90"
                    >
                        Selected<br />
                        <span className="text-primary ml-[10vw]">Work</span>
                    </motion.h1>
                </header>

                {/* Projects List */}
                <div className="max-w-[1800px] mx-auto">
                    {projects.map((project) => (
                        <ProjectItem key={project.id} project={project} />
                    ))}
                </div>

                {/* Bottom CTA */}

            </main>
            <Footer />
        </div>
    );
};

export default Work;
