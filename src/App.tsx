import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="about-us"><Features /></div>
        <div id="menu"><Recommendations /></div>
      </main>
      <Footer />
    </div>
  );
}

