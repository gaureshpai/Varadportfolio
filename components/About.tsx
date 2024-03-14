import React from 'react';
import '@/public/styles/About.css'
const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About</h2>
      <p className="about-text">Welcome to Gajanana Stores, your one-stop shop for all your needs!</p>
      <p className="about-text">Our shop offers a wide range of products including groceries, household items, Food, and more.</p>
      
      {/* Google Maps Embed API */}
      <div className="map-container">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.176765346221!2d75.0388938748186!3d12.896352616524092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a78d87d51305%3A0x199a398e8105d2e1!2sGajanana%20Stores!5e0!3m2!1sen!2sin!4v1710406437220!5m2!1sen!2sin" 
              width="600" 
              height="450"
              className='google-map'
                allowFullScreen
                 loading="lazy" >

              </iframe>
      </div>
    </div>
  );
};

export default About;
