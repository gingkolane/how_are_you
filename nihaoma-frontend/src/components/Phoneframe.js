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

          <div className="screen">

            <div className="screen-title">
              {this.props.titleText}
            </div>
            
            <div className="screen-content">
            {this.props.screenContent}
            </div>

            <div className="bottom-nav">
              {/* <i className="fas fa-info-circle fa-2x" ></i> */}
              <i className="material-icons md-36">info_outline</i>
              {/* <i class="material-icons md-48">help_outline</i> */}
              <i className="fas fa-clinic-medical fa-2x"></i>
              {/* <i className="far fa-heart fa-3x"></i> */}
              {/* <i className="material-icons md-48">sentiment_satisfied_alt</i> */}
              <i className="material-icons md-36">favorite_border</i>
              <i className="fas fa-paste fa-2x"></i>
              <i className="fas fa-capsules fa-2x"></i>
            </div>

          </div>

          <div className="button">      
          </div>

        </div>

      </div>
    );
  }
}
 
export default Phoneframe;