import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"

import { connect } from 'react-redux'
import { getSelectedCondition } from '../../reduxstore/condition.js'
import { getTreatmentsOfSelectedCondition } from '../../reduxstore/treatment.js'
import { getDoctorsOfSelectedCondition } from '../../reduxstore/doctor.js'
import { getTrialsOfSelectedCondition } from '../../reduxstore/trial.js'


class MyConditions extends Component {

  // defaultCondition = myConditions[0]

  // fetch(`http://localhost:3000/conditions/${defaultCondition.id}`)
  // .then(resp => resp.json())
  // .then( data => { 
  //   this.props.getTreatmentsOfdefaultCondition(data.treatmentsOfdefaultCondition);
  //   this.props.getDoctorsOfdefaultCondition(data.doctorsOfdefaultCondition);
  //   this.props.getTrialsOfdefaultCondition(data.trialsOfdefaultCondition)
  //   })

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

  render() {

    const screenContent = this.props.myConditions.map(condition => 
      <h3 key={condition.id} id={condition.id} onClick={this.handleClick}> {condition.condition_name}</h3>)
    
    return <PhoneFrame titleText = "My Conditions" screenContent={screenContent} />
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