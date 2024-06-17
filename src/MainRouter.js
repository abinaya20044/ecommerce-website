// MainRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './compo/Home';
import Shop from './compo/Shop';
import Blog from './compo/Blog';
import About from './compo/About';
import Contact from './compo/Contact';
import Cart from './compo/Cart';

const MainRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
};

export default MainRouter;
