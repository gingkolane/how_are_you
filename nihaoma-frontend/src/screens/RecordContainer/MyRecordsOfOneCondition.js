import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"
import { connect } from 'react-redux'
import { getCreatedRecord, getMyRecordsInFull } from '../../reduxstore/record.js'
import { getSelectedCondition } from '../../reduxstore/condition.js'

class MyRecordsOfOneCondition extends Component {

  // selectedCondition = 
  render() {
    // Todo: find selected condtion, fitler my record to have the selected condition, 
    // add timeline to this.
    const filteredRecords = this.props.myRecordsInFull.filter(record => record.condition.id === this.props.selectedCondition.id)

    const screenContent = filteredRecords.map(record => 
      <p key={record.id}>{record.date_of_visit}, {record.condition.condition_name}, {record.doctor.doctor_name} </p> )
      
     return <PhoneFrame titleText = { "Records on condition" } screenContent={screenContent}/>
    }
}

const mapStateToProps = state => { 
  return { 
    myRecordsInFull: state.record.myRecordsInFull,
    selectedCondition: state.condition.selectedCondition 
  } 
}

export default connect(mapStateToProps)(MyRecordsOfOneCondition)