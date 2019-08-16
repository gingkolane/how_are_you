import React, { Component } from 'react';
import '../stylesheets/Phoneframe.css';

class Phoneframe extends Component {

  render() { 
    return ( 
      <div className="iphone-container">
        
        <div className="iphone">
          
          <div className="top-bar">
            <div className="speaker"></div> 
            <div className="camera"></div> 
            <div className="camera-2"></div> 
          </div>

          <div className="screen-title">
            {this.props.titleText}
          </div>

          <div className="screen">
            {this.props.screenContent}
          </div>

          <div className="bottom-nav">
            <span>info</span>
            <span>resources</span>
            <span>Circle</span>
            <span>Records</span>
            <span>Medicine</span>
          </div>

          <div className="button">      
          </div>

        </div>

      </div>
    );
  }
}
 
export default Phoneframe;