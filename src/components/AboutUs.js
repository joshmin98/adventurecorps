import React, {Component} from 'react';

const styles = {
    height : "100%",
    backgroundColor: "#A9A9A9"
};


const AboutUs = (props) => {
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

export default AboutUs;
