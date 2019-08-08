import React, { Component } from 'react';
import Phoneframe from '../components/Phoneframe.js';

class CircleContainer extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <Phoneframe />
      <Phoneframe />
      <Phoneframe />
      <Phoneframe />
      <Phoneframe />
      <Phoneframe />
      </>
     );
  }
}
 
export default CircleContainer;