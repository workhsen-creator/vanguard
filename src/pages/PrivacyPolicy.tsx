import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="bg-background min-h-screen text-secondary">
            <div className="pt-32 px-6 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-12">Privacy Policy</h1>

                    <div className="prose prose-invert max-w-none space-y-8 text-secondary/80">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-secondary">1. Introduction</h2>
                            <p>
                                Welcome to Vanguard Studio. We respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit our website
                                and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-secondary">2. Information We Collect</h2>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                                <li>Contact Data includes email address and telephone numbers.</li>
                                <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-secondary">3. How We Use Your Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-secondary">4. Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at: {' '}
                                <a href="mailto:Contact@wearevanguard.co" className="text-primary hover:underline">Contact@wearevanguard.co</a>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
};

export default PrivacyPolicy;
