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
              <span style={{fontSize: "3em", color: "#cc3300"}}>
                <i className="material-icons md-36">info_outline</i>
              </span>
             
              {/* <i class="material-icons md-48">help_outline</i> */}
              <span style={{fontSize: "1em", color: "#993399"}}>
                <i className="fas fa-clinic-medical fa-2x "></i>
              </span>

              {/* <i className="far fa-heart fa-3x"></i> */}
              {/* <i className="material-icons md-48">sentiment_satisfied_alt</i> */}

              <span style={{fontSize: "3em", color: "#336699"}}>
                <i className="material-icons md-36">favorite_border</i>
              </span>

              <span style={{fontSize: "1em", color: "#ffcc00"}}>
                <i className="fas fa-paste fa-2x"></i>
              </span>

              <span style={{fontSize: "1em", color: "#009999"}}>
                <i className="fas fa-capsules fa-2x"></i>
              </span>
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