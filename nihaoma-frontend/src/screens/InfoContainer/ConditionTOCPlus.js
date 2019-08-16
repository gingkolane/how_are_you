import React, { Component } from 'react';
import PhoneFrame from "../../components/Phoneframe"
import Overview from './Overview'
import Diagnosis from './Diagnosis'
import StandardTreatment from './StandardTreatment'
import LatestTreatments from './LatestTreatments'

class ConditionTOCPlus extends Component {

  state = {
    screen: ''
  }

  handleClick = (e) => {
    this.setState({ screen: e.target.name })
  }

  switchScreen = (screen) => {
    switch(screen) {
      case "Overview":
        return <Overview />
      case "Diagnosis":
        return <Diagnosis />
      case 'StandardTreatment':
        return <StandardTreatment />
      case 'LatestTreatments':
        return <LatestTreatments />
      default:
        return <Overview />
    }
  }

  render() {
    return (
      <>
      <div className="iphone-container">
        <div className="iphone">
          <div className="top-bar">
            <div className="speaker"></div> 
            <div className="camera"></div> 
            <div className="camera-2"></div> 
          </div>
          
          <div className="screen">
            <button onClick={this.handleClick} name="Overview"> Overview </button>
            <button onClick={this.handleClick} name="Diagnosis"> Diagnosis </button>
            <button onClick={this.handleClick} name="StandardTreatment"> Standard treatment</button>
            <button onClick={this.handleClick} name="LatestTreatments"> Latest treatments</button>
            <button onClick={this.handleClick} name="Care"> Care </button>
          </div>

          <div className="button">      
          </div>
        </div>
      </div>

      {/* switch screen content based on clicked button on the first screen, default screen is overview */}
      { this.switchScreen(this.state.screen) }
      </>
    )
  }
}

export default ConditionTOCPlus