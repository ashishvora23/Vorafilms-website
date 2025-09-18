import React from 'react';

function About() {
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
            <p>With state-of-the-art equipment and a creative approach, we ensure that every photo tells a story and evokes emotion. Our studio is dedicated to providing exceptional service and delivering results that exceed expectations.</p>
            <p>We believe that photography is not just about taking pictures, but about preserving memories that will be cherished for generations to come.</p>
            <h3>Our Mission</h3>
            <p>Our mission is to capture the essence of every moment with creativity and technical excellence. We strive to create images that tell your unique story and become treasured heirlooms for years to come.</p>
            <h3>Our Team</h3>
            <p>Our team consists of award-winning photographers with years of experience in various photography genres. Each member brings their unique perspective and expertise to ensure that every project receives the attention it deserves.</p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="About Vorafilms" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;