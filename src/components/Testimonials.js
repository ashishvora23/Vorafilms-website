import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah & John",
      text: "Vorafilms captured our wedding day perfectly. The photos are absolutely stunning and truly reflect the emotions of the day.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      text: "The pre-wedding shoot was so much fun! The team made us feel comfortable and the results were beyond our expectations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 3,
      name: "Emma Thompson",
      text: "I've used Vorafilms for both my business photography and personal portraits. Their attention to detail is remarkable.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What our clients say about us</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <h4>{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;