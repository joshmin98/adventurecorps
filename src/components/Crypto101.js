import React, {Component} from 'react';

const styles = {
  height : "100%",
  backgroundColor: "#C0C0C0"
};


class Crypto101 extends Component{
  constructor(props){
    super(props)
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  render = () => {
    return (
        <div className = 'Crypto101'>
          <div className = 'Crypto101-head'>
            <h2>
              Crypto101
            </h2>
          </div>
          <div className='Crypto101-content'>
            paragraph or bullet points, this could also paragraph or bullet points, this could also paragraph or bullet points
          </div>
        </div>
    );
  };
};

export default Crypto101;