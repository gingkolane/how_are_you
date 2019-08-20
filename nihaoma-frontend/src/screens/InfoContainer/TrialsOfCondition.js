import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"
import { connect } from 'react-redux'


class TrialsOfCondition extends Component {

 render() {

  const screenContent = this.props.trialsOfSelectedCondition.map(trial => 
    <p key={trial.id} id={trial.id} onClick={this.handleClick}> {trial.BRIEF_TITLE}</p>)
  
  return <PhoneFrame titleText = { "Latest treatments" } 
    screenContent={screenContent}/>

}

const mapStateToProps = state => {
  return { trialsOfSelectedCondition: state.trial.trialsOfSelectedCondition }
}

export default connect(mapStateToProps)(TrialsOfCondition)


