import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

export default class Portfolio extends Component {
  
  render() {
    return (
      <div className="Portfolio">
        <Router >
          <Route path="/" component={Header} />
          <Route exact path="/" component={About} />
          <Route exact path="/werk" component={Body} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={Footer} />
        </Router>
      </div>
    );
  }
}

