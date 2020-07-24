import React, { Component } from 'react'
import PhoneframeForMedicine from "../../components/PhoneframeForMedicine"
import { connect } from 'react-redux'
import { getSelectedTreatment } from '../../reduxstore/treatment.js'

class MyDrugsByCondition extends Component {

  handleClick = (e) => {
    
    //select clicked treatment
      const treatment_id = parseInt(e.target.id)
      const selectedTreatment = this.props.myTreatments.find(treatment => treatment.id === treatment_id )
      this.props.getSelectedTreatment(selectedTreatment) 
  
    }

  screenContent = () => {
    return ( this.props.myTreatmentsGroupByConditions.map(conditionTreatments => { 
      return (
        <ul>
        <h2>{conditionTreatments.name}</h2>
          {conditionTreatments.treatments.map(treatment => 
          <li key={treatment.id} id={treatment.id} onClick={this.handleClick}>{treatment.treatment_name}</li>
          )}
        </ul>)
    })
  )}

  render() {
    return <PhoneframeForMedicine titleText = "My Medicine Box" screenContent={this.screenContent()}/>
  }

}

const mapStateToProps = state => {
  return { 
    myTreatments: state.treatment.myTreatments,
    myTreatmentsGroupByConditions: state.treatment.myTreatmentsGroupByConditions
   }
}

const mapDispatchToProps= { 
  getSelectedTreatment
}

export default connect(mapStateToProps,mapDispatchToProps)(MyDrugsByCondition)


