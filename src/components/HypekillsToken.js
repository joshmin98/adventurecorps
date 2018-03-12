import React, {Component} from 'react';

const styles = {
  height : "100%",
  backgroundColor: "#A9A9A9"
};


class HypekillsToken extends Component{
  constructor(props){
    super(props)
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  render = () => {
    return (
        <div className = 'HyperkillsToken'>
          <div className = 'HyperkillsToken-head'>
            <h2>
              HypekillsToken
            </h2>
          </div>
          <div className="HyperkillsToken-image"><div className='HyperkillsToken-circle'></div></div>
          <div className='HyperkillsToken-button'>
              <button>Buy Now</button>
            </div>
        </div>

    );
  };
};

export default HypekillsToken;