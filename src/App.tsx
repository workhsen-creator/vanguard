import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Lenis from 'lenis';

// Components
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import BackgroundAnimation from './components/BackgroundAnimation';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';

import Expertise from './pages/Expertise';
import StudioV from './pages/StudioV';
import Store from './pages/Store';
import Career from './pages/Career';
import Team from './pages/Team';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  // Check for mobile device (width < 768px)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [isLoading, setIsLoading] = useState(!isMobile);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevLocation && !isLoading) {
      setIsTransitioning(true);
      setPrevLocation(location.pathname);
    }
  }, [location.pathname, prevLocation, isLoading]);

  useEffect(() => {
    if (isMobile) return; // Skip custom scroll on mobile for native smoothness

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [isMobile]);

  return (
    <>
      <Helmet>
        <title>Vanguard | PR & Communications Agency</title>
        <meta name="description" content="Vanguard is a leading PR and communications agency in the MENA region, driving impactful change through creativity, innovation, and trusted partnerships." />
        <link rel="canonical" href="https://wearevanguard.co/" />
      </Helmet>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isTransitioning && (
          <PageTransition key="page-transition" onComplete={() => setIsTransitioning(false)} />
        )}
      </AnimatePresence>

      <div className={`min-h-screen font-sans bg-background text-secondary cursor-none transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <ScrollToTop />
        <BackgroundAnimation />
        <Cursor />
        {!isLoading && <Navbar />}
        <main className="relative z-10 w-full overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/expertise" element={<Expertise />} />
            <Route path="/studiov" element={<StudioV />} />
            <Route path="/store" element={<Store />} />
            <Route path="/career" element={<Career />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
