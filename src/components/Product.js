// Product.js

import React from 'react';
import 'tailwindcss/tailwind.css';

const Product = ({ title, description, image, price }) => {
  return (
    <div className="pro">
      <img src={image} alt="" />
      <div className="des">
        <span>{title}</span>
        <h5>{description}</h5>
        {/* ... */}
        <h4>${price}</h4>
      </div>
      <a href="#"><i className="fal fa-shopping-cart cart" alt=""></i></a>
    </div>
  );
};

export default Product;
