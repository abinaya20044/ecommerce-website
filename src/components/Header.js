// Header.js

import React from 'react';
import 'tailwindcss/tailwind.css';

const Header = () => {
  return (
    <section id="header">
      {/* Logo */}
      <a href="#"><img src="img/logo.png" alt="" /></a>
      
      {/* Navigation */}
      <div>
        <ul id="navbar">
          {/* Navigation links */}
          {/* ... */}
          <li id="lg-bag"><a href="cart.html"><i className="far fa-shopping-bag"></i></a></li>
          <a href="#" id="close"><i className="far fa-times"></i></a>
        </ul>
      </div>

      {/* Mobile menu */}
      <div id="mobile">
        <a href="cart.html"><i className="far fa-shopping-bag"></i></a>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </section>
  );
};

export default Header;
