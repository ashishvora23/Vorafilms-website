// src/components/Partners.js
import React from 'react';

function Partners() {
  const partners = [
    { id: 1, name: 'Partner 1', logo: 'https://via.placeholder.com/150x80?text=Partner+1' },
    { id: 2, name: 'Partner 2', logo: 'https://via.placeholder.com/150x80?text=Partner+2' },
    { id: 3, name: 'Partner 3', logo: 'https://via.placeholder.com/150x80?text=Partner+3' },
    { id: 4, name: 'Partner 4', logo: 'https://via.placeholder.com/150x80?text=Partner+4' },
    { id: 5, name: 'Partner 5', logo: 'https://via.placeholder.com/150x80?text=Partner+5' },
    { id: 6, name: 'Partner 6', logo: 'https://via.placeholder.com/150x80?text=Partner+6' },
  ];

  return (
    <section className="partners">
      <div className="container">
        <div className="section-title">
          <h2>Our Partners</h2>
          <p>We collaborate with the best in the industry</p>
        </div>
        <div className="partners-scroll">
          <div className="partners-track">
            {partners.concat(partners).map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="partner-item">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;