import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '../components/Footer';
import { team } from '../data/team';

const Team = () => {

    return (
        <>
            <div className="pt-40 px-6 md:px-20 min-h-screen max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-light text-secondary mb-8">
                        Change Starts <span className="text-primary">Together</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary/60 max-w-2xl mx-auto text-center">
                        And together, we are Vanguard.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 mb-32 max-w-4xl mx-auto"
                >
                    {team.map((member, i) => {
                        const [isHovered, setIsHovered] = useState(false);

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div className="mb-6 overflow-hidden aspect-[3/4] relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                                    <img
                                        src={isHovered && member.hoverImage ? member.hoverImage : member.image}
                                        alt={member.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover origin-center transform group-hover:scale-105 transition-all duration-700"
                                    />
                                    {!member.noOverlay && (
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                <p className="text-primary text-xs uppercase tracking-[0.2em]">{member.role}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Career Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 mt-40"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-secondary leading-none mb-6">
                        JOIN OUR <span className="text-primary">TEAM</span>
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-light text-secondary mb-10">
                        You belong at Vanguard
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg md:text-xl leading-relaxed text-secondary/80 mb-20">
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
                        {[
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
                        ].map((benefit, index) => (
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

export default Team;
