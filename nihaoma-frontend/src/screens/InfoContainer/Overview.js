import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneframeForInfo from "../../components/PhoneframeForInfo"

class Overview extends Component {

  screenContent = (
     <>
      <h4>Summary</h4>
        <p> {this.props.selectedCondition.condition_name} </p>
      <h4>Causes</h4>
        <p> {this.props.selectedCondition.condition_name} </p>
      <h4>Signs and symptoms</h4>
        <p> {this.props.selectedCondition.condition_name} </p>
    </>
  )

  render() {
    return <PhoneframeForInfo titleText = {this.props.selectedCondition.condition_name} 
      screenContent={this.screenContent} />
  }
}

const mapStateToProps = state => {
  return { selectedCondition: state.condition.selectedCondition }
}

export default connect(mapStateToProps)(Overview)

