import React, {Component} from 'react';

class Hypekills extends Component{
  constructor(props){
    super(props)
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  render = () => {
    return (
        <div className = 'hyperkills'>
          <div className = 'hyperkills-head'>
            <h1>
              Hypekills Crypto
            </h1>
          </div>
          <div className='hyperkills-content'>
            paragraph or bullet points, this could also paragraph or bullet points, this could also paragraph or bullet points
          </div>
          <div className='hyperkills-button'>
            <button> See our tokens </button>
          </div>
        </div>
    );
  };
};

export default Hypekills;