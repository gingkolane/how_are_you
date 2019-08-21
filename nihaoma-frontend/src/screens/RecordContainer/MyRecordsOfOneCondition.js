import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"
import { getCreatedRecord } from '../../reduxstore/record.js'

class MyRecordsOfOneCondition extends Component {

  render() {
    const screenContent = this.props.myRecords.map(record => 
      <p key={record.id} >{record.date_of_visit}: {record.myCondition} </p> )
      
     return <PhoneFrame titleText = { "MyRecords" } screenContent={screenContent}/>
    }
}

const mapStateToProps = state => { 
  return { myRecords: state.record.myRecords } 
}

const mapDispatchToProps= { 
  getCreatedRecord
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRecordsOfOneCondition)