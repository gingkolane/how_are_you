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
            
            <div className="screen-content-scroll">
            {this.props.screenContent}
            </div>


            <div className="bottom-nav">
              <span style={{fontSize: "3em", color: "#b3b3b3"}}>
                <i className="material-icons md-36">info_outline</i>
              </span>
              
              <span style={{fontSize: "1em", color: "#993399"}}>
                <i className="fas fa-clinic-medical fa-2x "></i>
              </span>

              <span style={{fontSize: "3em", color: "#b3b3b3"}}>
                <i className="material-icons md-36">favorite_border</i>
              </span>

              <span style={{fontSize: "1em", color: "#b3b3b3"}}>
                <i className="fas fa-paste fa-2x"></i>
              </span>

              <span style={{fontSize: "1em", color: "#b3b3b3"}}>
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