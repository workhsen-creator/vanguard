import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Career = () => {
    const benefits = [
        {
            title: "Endless Opportunities",
            description: "A powerhouse agency where the best communicators begin and grow their careers."
        },
        {
            title: "Learning Mindset",
            description: "We cultivate an environment of constant learning and sharing between generations of talent."
        },
        {
            title: "Diverse Culture",
            description: "Global in nature, we believe representation matters, and all perspectives are relevant."
        },
        {
            title: "Work-Life Balance",
            description: "You matter. We are a community with balance and flexibility for a successful career."
        },
        {
            title: "Global Reach",
            description: "We are everywhere our clients need us to solve their challenges with technology and creativity."
        }
    ];

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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-secondary leading-none mb-6">
                        JOIN OUR <span className="text-primary">TEAM</span>
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-light text-secondary mb-10">
                        You belong at Vanguard
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg md:text-xl leading-relaxed text-secondary/80">
                        <p>
                            When you work at Vanguard, you're part of a passionate global community. It's more than a name. It's a legacy of commitment to clients and colleagues. Together we are what makes Vanguard the most exciting destination in our industry today.
                        </p>
                        <p>
                            At Vanguard, we are at the crossroads of creativity and problem-solving for our clients. But we don't stop there. We're lifelong learners who are constantly pursuing growth and thrive at the edge of innovation.
                        </p>
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-32"
                >
                    <h3 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Benefits</h3>
                    <p className="text-xl text-secondary/70 mb-20 max-w-2xl">
                        Discover the wealth of opportunities and benefits offered at Vanguard tailored with you at the center of it all.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group">
                                <div className="w-12 h-1 bg-primary mb-6 group-hover:w-full transition-all duration-500"></div>
                                <h4 className="text-2xl font-bold mb-4">{benefit.title}</h4>
                                <p className="text-secondary/70 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
            <Footer />
        </>
    );
};

export default Career;
