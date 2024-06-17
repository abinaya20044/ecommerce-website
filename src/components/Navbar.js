// Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBarClick = () => {
    setIsActive(true);
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };

  return (
    <div>
      <i id="bar" className="fas fa-outdent" onClick={handleBarClick}></i>
      <div id="navbar" className={isActive ? 'active' : ''}>
        {/* Add your navigation links here */}
        <i id="close" className="far fa-times" onClick={handleCloseClick}></i>
      </div>
    </div>
  );
};

export default Navbar;
