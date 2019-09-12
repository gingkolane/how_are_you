import React, { Component } from 'react'
import PhoneframeForRecord from "../../components/PhoneframeForRecord"
import { connect } from 'react-redux'

class MyRecordsOfOneCondition extends Component {

  // selectedCondition = 
  render() {
    // Todo: find selected condtion, fitler my record to have the selected condition, 
    // add timeline to this.
    const filteredRecords = this.props.myRecordsInFull.filter(record => record.condition.id === this.props.selectedCondition.id)

    const screenContent = filteredRecords.map(record => 
      <p key={record.id}>{record.date_of_visit}, {record.condition.condition_name}, {record.doctor.doctor_name} </p> )
      
     return <PhoneframeForRecord titleText = { "Records on condition" } screenContent={screenContent}/>
    }
}

const mapStateToProps = state => { 
  return { 
    myRecordsInFull: state.record.myRecordsInFull,
    selectedCondition: state.condition.selectedCondition 
  } 
}

export default connect(mapStateToProps)(MyRecordsOfOneCondition)