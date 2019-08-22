import React, { Component } from 'react';
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"
import Overview from './Overview'
import Diagnosis from './Diagnosis'
import TreatmentsOfCondition from './TreatmentsOfCondition'
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
      case 'TreatmentsOfCondition':
        return <TreatmentsOfCondition />
      case 'TrialsOfCondition':
        return <TrialsOfCondition />
      default:
        return <Overview />
    }
  }

  screenContent = (
    <div className="toc-buttons">
      <button onClick={this.handleClick} name="Overview"> Overview </button>
      <button onClick={this.handleClick} name="Diagnosis"> Diagnosis </button>
      <button onClick={this.handleClick} name="TreatmentsOfCondition"> Standard treatments</button>
      <button onClick={this.handleClick} name="TrialsOfCondition"> Latest Development</button>
      <button onClick={this.handleClick} name="Care"> Care </button>
   </div>
  )

  render() {
   
    return (
      <>
        <PhoneFrame titleText = "Overview" screenContent={this.screenContent}/>
        { this.switchScreen(this.state.screen) }
      </>
    )
  }

}


const mapStateToProps = state => {
  return { myConditions: state.condition.myConditions }
}

export default connect(mapStateToProps)(ConditionTOCPlus)

// export default ConditionTOCPlus