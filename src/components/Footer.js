import React, {Component} from 'react';

class Footer extends Component{
  constructor(props){
    super(props)
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  render = () => {
    return (
        <div className='footer'>
          <div className='footer-head'>C 2018 Adventure Corporation</div>
        </div>
    );
  };
};

export default Footer;