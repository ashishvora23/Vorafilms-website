// src/components/Partners.js
import React from 'react';

function Partners() {
  const partners = [
    { id: 1, name: 'Canon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Canon-Logo.png' },
    { id: 2, name: 'Nikon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Nikon_logo.svg/1280px-Nikon_logo.svg.png' },
    { id: 3, name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1024px-Sony_logo.svg.png' },
    { id: 4, name: 'Fujifilm', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fujifilm_logo.svg/1280px-Fujifilm_logo.svg.png' },
    { id: 5, name: 'Wedding Venue', logo: 'https://via.placeholder.com/150x80?text=Venue+Partner' },
    { id: 6, name: 'Bridal Shop', logo: 'https://via.placeholder.com/150x80?text=Bridal+Partner' },
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