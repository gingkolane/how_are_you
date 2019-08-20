import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"
import { connect } from 'react-redux'

class TreatmentsOfCondition extends Component {

  render() {

    const screenContent = this.props.treatmentsOfSelectedCondition.map(treatment => 
      <p key={treatment.id} id={treatment.id} onClick={this.handleClick}> {treatment.treatment_name}</p>)
    
    return <PhoneFrame titleText = { "standard treatments" } 
      screenContent={screenContent}/>

  }
}

const mapStateToProps = state => {
  return { treatmentsOfSelectedCondition: state.treatment.treatmentsOfSelectedCondition }
}

export default connect(mapStateToProps)(TreatmentsOfCondition)
