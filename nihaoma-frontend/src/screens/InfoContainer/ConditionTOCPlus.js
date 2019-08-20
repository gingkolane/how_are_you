import React, { Component } from 'react';
import PhoneFrame from "../../components/Phoneframe"
import Overview from './Overview'
import Diagnosis from './Diagnosis'
import StandardTreatment from './StandardTreatment'
import TrialsOfCondition from './TrialsOfCondition'

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
        return <TrialsOfCondition />
      default:
        return <Overview />
    }
  }

  screenContent = (
    <>
      <button onClick={this.handleClick} name="Overview"> Overview </button>
      <button onClick={this.handleClick} name="Diagnosis"> Diagnosis </button>
      <button onClick={this.handleClick} name="StandardTreatment"> Standard treatment</button>
      <button onClick={this.handleClick} name="LatestTreatments"> Latest treatments</button>
      <button onClick={this.handleClick} name="Care"> Care </button>
   </>
  )

  render() {
    return (
      <>
        <PhoneFrame titleText = { "Overview" } screenContent={this.screenContent}/>
        { this.switchScreen(this.state.screen) }
      </>
    )
  }

}

export default ConditionTOCPlus