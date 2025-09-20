// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import PortfolioPreview from '../components/PortfolioPreview';
import ShopPreview from '../components/ShopPreview';
import AboutPreview from '../components/AboutPreview';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners'; // Add this import

function Home() {
  return (
    <div>
      <Hero />
      <PortfolioPreview />
      <ShopPreview />
      <AboutPreview />
      <Partners /> {/* Add this line */}
      <Testimonials />
    </div>
  );
}

export default Home;