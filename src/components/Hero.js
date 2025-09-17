import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Capture Your Precious Moments</h1>
          <p>Vorafilms Photography Studio specializes in wedding, portrait, and commercial photography. We turn moments into memories that last a lifetime.</p>
          <button className="cta-button" onClick={() => navigate('/portfolio')}>View Our Work</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;