import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';

const Features = lazy(() => import('./components/Features'));
const Recommendations = lazy(() => import('./components/Recommendations'));
const Footer = lazy(() => import('./components/Footer'));

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
        <Suspense fallback={null}>
          <div id="about-us"><Features /></div>
          <div id="menu"><Recommendations /></div>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

