import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSelectedTrial } from '../../reduxstore/trial.js'
import PhoneframeForInfo from "../../components/PhoneframeForInfo"

class TrialsOfCondition extends Component {

  handleClick = (e) => {
    
  //select clicked condition
    const trial_id = parseInt(e.target.id)
    const selectedTrial = this.props.trialsOfSelectedCondition.find(trial => trial.id === trial_id )
    this.props.getSelectedTrial(selectedTrial) 

   //fetch treatments, trials and doctors data based on currentCondion id, and store the fetched data in redux store
    fetch(`http://localhost:3000/trials/${selectedTrial.id}`)
    .then(resp => resp.json())
    .then(trial => {
      this.props.getSelectedTrial({ selectedTrial: trial})
    })
  }

 render() {

  const screenContent = this.props.trialsOfSelectedCondition.slice(0, 4).map(trial => 
    <p key={trial.id} id={trial.id} onClick={this.handleClick}> {trial.BRIEF_TITLE}</p>)
  
  return <PhoneframeForInfo titleText = "Latest treatments" 
    screenContent={screenContent}/>

  }

}

const mapStateToProps = state => { 
  return { trialsOfSelectedCondition: state.trial.trialsOfSelectedCondition} 
}

const mapDispatchToProps= { 
  getSelectedTrial,
}

export default connect(mapStateToProps, mapDispatchToProps)(TrialsOfCondition)