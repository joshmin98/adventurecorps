import React, {Component} from 'react';

const styles = {
    height : "100%",
    backgroundColor: "#A9A9A9"
};

const HyperkillsToken = (props) => {
    return (
        <div className = 'HyperkillsToken'>
          <div className = 'HyperkillsToken-head'>
            <h2>
              HyperkillsToken
            </h2>
          </div>
          <div className="HyperkillsToken-image"><div className='HyperkillsToken-circle'></div></div>
          <div className='HyperkillsToken-button'>
            <button>Buy Now</button>
          </div>
        </div>

    );
};

export default HyperkillsToken;
