// SmallBanner.js

import React from 'react';
import 'tailwindcss/tailwind.css';

const SmallBanner = ({ title, description, buttonText, className }) => {
  return (
    <section id="sm-banner" className={`section-p1 ${className}`}>
      <div className="banner-box">
        <h4>{title}</h4>
        <h2>{description}</h2>
        <span>{buttonText}</span>
        <button className="white">Learn More</button>
      </div>
      {/* ... Add more SmallBanner boxes as needed */}
    </section>
  );
};

export default SmallBanner;
