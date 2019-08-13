import React, { Component } from 'react';
import '../stylesheets/Phoneframe.css';

class Phoneframe extends Component {
  // state = {  }
  render() { 
    return ( 
      <div className="iphone-container">
        <div className="iphone">
          
          <div className="top-bar">
            <div className="speaker"></div> 
            <div className="camera"></div> 
            <div className="camera-2"></div> 
          </div>
          
          <div className="screen">

            
          </div>

          <div className="button">      
          </div>

        </div>

      </div>
     );
  }
}
 
export default Phoneframe;