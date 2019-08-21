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
            <i className="fas fa-info-circle fa-3x" ></i>
            {/* <i class="far fa-hospital fa-3x"></i> */}
            <i class="fas fa-clinic-medical fa-3x"></i>
            {/* <i class="fas fa-hospital fa-3x"></i> */}
            {/* <i class="fas fa-dice-d20 fa-3x"></i> */}
            {/* <i class="far fa-comments fa-4x"></i> */}
            <i class="far fa-heart fa-4x"></i>
            {/* <i class="far fa-clipboard fa-3x"></i> */}
            <i class="fas fa-paste fa-3x"></i>
            {/* <i class="fas fa-notes-medical fa-3x"></i> */}
            {/* <i class="fas fa-prescription-bottle-alt fa-3x"></i> */}
            <i class="fas fa-capsules fa-3x"></i>
          </div>

          <div className="button">      
          </div>

        </div>

      </div>
    );
  }
}
 
export default Phoneframe;