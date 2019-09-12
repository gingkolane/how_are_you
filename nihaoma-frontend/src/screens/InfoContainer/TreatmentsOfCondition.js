import React, { Component } from 'react'
import PhoneframeForInfo from "../../components/PhoneframeForInfo"
import { connect } from 'react-redux'

class TreatmentsOfCondition extends Component {

  render() {

    const screenContent = this.props.treatmentsOfSelectedCondition.slice(0, 10).map(treatment => 
      <li key={treatment.id} id={treatment.id} onClick={this.handleClick}> {treatment.treatment_name}</li>)
    
    return <PhoneframeForInfo titleText = { "Standard treatments" } 
      screenContent={screenContent}
      />

  }
}

const mapStateToProps = state => {
  return { 
    treatmentsOfSelectedCondition: state.treatment.treatmentsOfSelectedCondition,
    myConditions: state.condition.myConditions 
  }
}

export default connect(mapStateToProps)(TreatmentsOfCondition)
