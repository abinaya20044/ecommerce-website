// Banner.js

import React from 'react';
import 'tailwindcss/tailwind.css';

const Banner = ({ title, description, buttonText }) => {
  return (
    <section className="section-m1">
      <h4>{title}</h4>
      <h2>{description}</h2>
      <button className="normal">{buttonText}</button>
    </section>
  );
};

export default Banner;
