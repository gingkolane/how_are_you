import React, { Component } from 'react';
import Phoneframe from '../components/Phoneframe.js';

class CircleContainer extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="section-container">
        <Phoneframe />
        <Phoneframe />
        <Phoneframe />
        <Phoneframe />
      </div>
     );
  }
}
 
export default CircleContainer;