import { motion } from 'framer-motion';

interface PageTransitionProps {
    onComplete: () => void;
}

const PageTransition = ({ onComplete }: PageTransitionProps) => {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 bg-primary z-[100] flex items-center justify-center origin-top"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-black text-6xl md:text-9xl font-black uppercase tracking-tighter"
            >
                VANGUARD
            </motion.div>
        </motion.div>
    );
};

export default PageTransition;
