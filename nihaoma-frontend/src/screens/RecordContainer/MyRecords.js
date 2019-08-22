import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"
import { getSelectedRecord, getMyRecordsInFull } from '../../reduxstore/record.js'
import { getSelectedCondition } from '../../reduxstore/condition.js'


class MyRecords extends Component {

  handleConditionClick = (e) => {
  //select clicked condition and getSelectedCondition
    const condition_id = parseInt(e.target.id)
    const selectedCondition = this.props.myRecordsInFull.find(record => record.condition.id === condition_id )
    this.props.getSelectedCondition(selectedCondition) 
  }

  handleRecordClick = (e) => {
    //select clicked condition and getSelectedCondition
      const record_id = parseInt(e.target.id)
      const selectedRecord = this.props.myRecordsInFull.find(record => record.id === record_id )
      this.props.getSelectedRecord(selectedRecord) 
    }

  render() {
    
    const screenContent = this.props.myRecordsInFull.slice(0, 4).map(record => { 
        return (
          <ul>
            <h4 key={record.condition.id} id={record.condition.id} onClick={this.handleConditionClick}>{record.condition.condition_name}</h4>
            <li key={record.id} id={record.id} onClick={this.handleRecordClick}>{record.date_of_visit}:{record.doctor.doctor_name}</li>
          </ul>
        )
    })
    
   return <PhoneFrame titleText = "My medical records" screenContent={screenContent}/>
  }

}



const mapStateToProps = state => {
  return { 
    // myRecords: state.record.myRecords,
    myRecordsInFull: state.record.myRecordsInFull
   }
}

const mapDispatchToProps= { 
  getSelectedCondition, 
  getSelectedRecord, 
  getMyRecordsInFull
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRecords)


