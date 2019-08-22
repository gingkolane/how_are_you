import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"
import { connect } from 'react-redux'

class TreatmentsOfCondition extends Component {

  render() {

    const screenContent = this.props.treatmentsOfSelectedCondition.map(treatment => 
      <li key={treatment.id} id={treatment.id} onClick={this.handleClick}> {treatment.treatment_name}</li>)
    
    return <PhoneFrame titleText = { "Standard treatments" } 
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
