import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import WelcomeSection from '../components/WelcomeSection';
import AboutTeaser from '../components/AboutTeaser';
import ContactTeaser from '../components/ContactTeaser';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-background min-h-screen">
            <VideoSection />
            <Hero />
            <WelcomeSection />
            <AboutTeaser />
            <ContactTeaser />
            <Footer />
        </div>
    );
};

export default Home;

