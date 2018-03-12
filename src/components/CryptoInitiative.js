import React, {Component} from 'react';

const styles = {
  height : "100%",
  backgroundColor: "#DCDCDC"
};


class CryptoInitiative extends Component{
  constructor(props){
    super(props)
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  render = () => {
    return (
        <div className = 'CryptoInitiative'>
          <div className = 'CryptoInitiative-head'>
            <h2>
              CryptoInitiative
            </h2>
          </div>
          <div className='CryptoInitiative-content'>
            paragraph or bullet points, this could also paragraph or bullet points, this could also paragraph or bullet points
          </div>
        </div>
    );
  };
};

export default CryptoInitiative;