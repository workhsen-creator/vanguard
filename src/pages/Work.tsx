import { motion } from 'framer-motion';

import Footer from '../components/Footer';

const Work = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden mb-20 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center z-10"
                >
                    <h1 className="text-6xl md:text-[10rem] font-bold tracking-tighter text-secondary leading-none mb-4 uppercase">
                        Selected <span className="text-primary">Work</span>
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-3xl text-secondary/60 uppercase tracking-[0.5em]"
                    >
                        Coming Soon
                    </motion.div>
                </motion.div>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "circOut" }}
                    className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/30 z-0"
                />
            </div>
            <Footer />
        </>
    );
};

export default Work;
