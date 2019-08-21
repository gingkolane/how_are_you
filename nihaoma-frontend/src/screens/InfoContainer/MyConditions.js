import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"

import { connect } from 'react-redux'
import { getSelectedCondition } from '../../reduxstore/condition.js'
import { getTreatmentsOfSelectedCondition } from '../../reduxstore/treatment.js'
import { getDoctorsOfSelectedCondition } from '../../reduxstore/doctor.js'
import { getTrialsOfSelectedCondition } from '../../reduxstore/trial.js'


class MyConditions extends Component {

  handleClick = (e) => {
    //select clicked condition
    const condition_id = parseInt(e.target.id)
    const selectedCondition = this.props.myConditions.find(condition => condition.id === condition_id )
    this.props.getSelectedCondition(selectedCondition) 

    //fetch treatments, trials and doctors data based on currentCondion id, and store the fetched data in redux store
    fetch(`http://localhost:3000/conditions/${selectedCondition.id}`)
    .then(resp => resp.json())
    .then( data => { 
      this.props.getTreatmentsOfSelectedCondition(data.treatmentsOfCondition);
      this.props.getDoctorsOfSelectedCondition(data.doctorsOfCondition);
      this.props.getTrialsOfSelectedCondition(data.trialsOfCondition)
      })
    }

    // screenContent = () => {
    //   if(this.props.myConditions) {
    //     this.props.myConditions.map(condition => {
    //       return (<p key={condition.id} id={condition.id} onClick={this.handleClick}> 
    //         {condition.condition_name} </p>)
    //     })
    //   }
    // }
  render() {

    const screenContent = this.props.myConditions.map(condition => 
      <p key={condition.id} id={condition.id} onClick={this.handleClick}> {condition.condition_name}</p>)
    
    return <PhoneFrame titleText = "My Conditions" screenContent={screenContent}/>
  }

}

const mapStateToProps = state => {
  return { myConditions: state.condition.myConditions }
}


const mapDispatchToProps = {
  getSelectedCondition,
  getTreatmentsOfSelectedCondition,
  getDoctorsOfSelectedCondition,
  getTrialsOfSelectedCondition
}

export default connect(mapStateToProps, mapDispatchToProps)(MyConditions)


// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao