import React, { Component } from 'react';
import '../stylesheets/Phoneframe.css';
import Phoneframe from '../components/Phoneframe.js';

class GroupSelectionScreen extends Component {
  // state = {  }
  render() { 
    return ( 
      <div class="iphone-container">
        <div class="iphone">
          
          <div class="top-bar">
            <div class="speaker"></div> 
            <div class="camera"></div> 
            <div class="camera-2"></div> 
          </div>
          
          <div class="screen">

            
          </div>

          <div class="button">      
          </div>

        </div>

      </div>
     );
  }
}
 
export default GroupSelectionScreen;