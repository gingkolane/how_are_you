import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"
import { connect } from 'react-redux'

class DisplayOneRecord  extends Component {


 render() {

  const screenContent = (
    <ul>
      <h4>Condition:</h4> 
      <li>{this.props.selectedRecord.condition.condition_name}</li>

      <h4>Doctor: </h4>
      <li>
      {this.props.selectedRecord.doctor.doctor_name}
      {this.props.selectedRecord.doctor.FACILITY_NAME}
      </li>

      <h4>Treatments perscribed: </h4> 
      {this.props.selectedRecord.treatments.map(treatment =>
        <li>{treatment.treatment_name}</li>)}
    </ul> 
  )

   return <PhoneFrame titleText = {this.props.selectedRecord.date_of_visit}
     screenContent={screenContent}/>
  }
}
}

const mapStateToProps = state => {
  return { 
    selectedRecord: state.record.selectedRecord
   }
}

export default connect(mapStateToProps)(DisplayOneRecord)