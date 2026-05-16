import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <Navbar />
      <main>
        <div id="home"><Hero isLoaded={!isLoading} /></div>
        <div id="about-us"><Features /></div>
        <div id="menu"><Recommendations /></div>
      </main>
      <Footer />
    </div>
  );
}

