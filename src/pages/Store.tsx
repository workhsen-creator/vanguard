import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Store = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center z-10"
                >
                    <h1 className="text-6xl md:text-[12rem] font-bold tracking-tighter text-secondary leading-none mb-4">
                        VANGUARD <span className="text-primary">STORE</span>
                    </h1>
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl md:text-3xl text-secondary/60 uppercase tracking-[0.5em]"
                        >
                            Coming Soon
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-sm md:text-base text-secondary/40 max-w-md mx-auto"
                        >
                            Curated goods and digital assets.
                        </motion.p>
                    </div>

                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default Store;
