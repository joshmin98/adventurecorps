import React, {Component} from 'react';

const styles = {
  height : "100%",
  backgroundColor: "#A9A9A9"
};


class AboutUs extends Component{
  constructor(props){
    super(props)
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  render = () => {
    return (
        <div className = 'aboutus'>
          <div className = 'aboutus-head'>
            <h2>OUR TEAM</h2>
          </div>
          <div className='aboutus-content'>
            <div className='aboutus-team'> <div className='aboutus-image'></div> <div className='aboutus-name'>Name</div> </div>
            <div className='aboutus-team'> <div className='aboutus-image'></div> <div className='aboutus-name'>Name</div> </div>
          </div>
        </div>
    );
  };
};

export default AboutUs;