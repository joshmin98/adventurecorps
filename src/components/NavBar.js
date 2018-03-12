import React, {Component} from 'react';


class NavBar extends Component{
  constructor(props){
    super(props)
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  render = () => {
    return (
        <div className = "navbar">
            <div className="navbar-image">
                <a href=""  style = {{ "color": "black"}}>HYPEKILLS</a>
            </div>
            <div className="navbar-menu">
              <ul className="navbar-top">
                <li className="navbar-item">
                  <a href="/">About Us</a>
                </li>
                <li className="navbar-item">
                  <a href="/">Hypekills Token</a>
                </li>
                <li className="navbar-item">
                  <a href="/">Crypto 101</a>
                </li>
                <li className="navbar-item">
                  <a href="/">Crypto Initiative</a>
                </li>
              </ul>
            </div>
            <div className='navbar-button'>
              <button className='menu-button'>Buy Now</button>
            </div>
        </div>
    );
  };
};

export default NavBar;