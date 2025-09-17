import React from 'react';
import Hero from '../components/Hero';
import PortfolioPreview from '../components/PortfolioPreview';
import ShopPreview from '../components/ShopPreview';
import AboutPreview from '../components/AboutPreview';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div>
      <Hero />
      <PortfolioPreview />
      <ShopPreview />
      <AboutPreview />
      <Testimonials />
    </div>
  );
}

export default Home;