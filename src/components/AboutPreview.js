import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPreview() {
  const navigate = useNavigate();

  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Get to know Vorafilms Photography Studio</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>We Create Memories That Last Forever</h3>
            <p>Vorafilms Photography Studio was established in 2010 with a passion for capturing life's most precious moments. Our team of professional photographers specializes in wedding, portrait, and commercial photography.</p>
            <p>With state-of-the-art equipment and a creative approach, we ensure that every photo tells a story and evokes emotion...</p>
            <button className="cta-button" onClick={() => navigate('/about')}>Read More</button>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="About Vorafilms" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;