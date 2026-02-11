import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import WelcomeSection from '../components/WelcomeSection';
import PortfolioGrid from '../components/PortfolioGrid';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-background min-h-screen">
            <VideoSection />
            <Hero />
            <WelcomeSection />
            <PortfolioGrid />
            <Footer />
        </div>
    );
};

export default Home;

