// App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import Header from './components/Header';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Product from './components/Product';
import Banner from './components/Banner';
import SmallBanner from './components/SmallBanner';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Navbar from './components/Navbar';
import MainRouter from './MainRouter';

const App = () => {
  return (
    <Router>  {/* Wrap everything inside the BrowserRouter */}
      <div>
        <Header />
        <Hero />
        <Feature />
        {/* Render other components as needed */}
        <Product />
        <Banner />
        <SmallBanner />
        <Footer />
        <Newsletter />
        <Navbar />
        <MainRouter />
      </div>
    </Router>
  );
};

export default App;
