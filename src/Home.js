import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar.js';
import Hypekills from './components/Hypekills.js';
import CryptoInitiative from './components/CryptoInitiative.js';
import Crypto101 from './components/Crypto101.js';
import HypekillsToken from './components/HypekillsToken.js';
import AboutUs from './components/AboutUs.js';
import Footer from './components/Footer.js';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hypekills />
        <CryptoInitiative />
        <Crypto101 />
        <HypekillsToken />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default Home;
