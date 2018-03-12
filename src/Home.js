import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar.js';
import Hyperkills from './components/Hyperkills.js';
import CryptoInitiative from './components/CryptoInitiative.js';
import Crypto101 from './components/Crypto101.js';
import HyperkillsToken from './components/HyperkillsToken.js';
import AboutUs from './components/AboutUs.js';
import Footer from './components/Footer.js';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hyperkills />
        <CryptoInitiative />
        <Crypto101 />
        <HyperkillsToken />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default Home;
