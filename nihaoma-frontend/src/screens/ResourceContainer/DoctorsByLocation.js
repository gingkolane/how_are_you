import React, { Component } from 'react'

class DoctorsByCondition extends Component {

  render() {
    return (
      <div className="iphone-container" onClick={() => this.props.getRandomCondition({chloe: [], eric: "2"})}>
        <div className="iphone">
          <div className="top-bar">
            <div className="speaker"></div> 
            <div className="camera"></div> 
            <div className="camera-2"></div> 
          </div>
          
          <div className="screen">
            <h4>This is doctors by location</h4>
          </div>

          <div className="button"></div>
        </div>
      </div>
    ) 
  }
}

export default DoctorsByCondition

