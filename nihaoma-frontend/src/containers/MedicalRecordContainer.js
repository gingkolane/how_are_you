import React, { Component } from 'react';
import AddADoctorVisit from '../screens/MedicalRecordContainer/AddADoctorVisit'
import OneVisitSummary from '../screens/MedicalRecordContainer/OneVisitSummary'
import VisitsHistoryOfOneCondition from '../screens/MedicalRecordContainer/VisitsHistoryOfOneCondition'
import VisitsHistoryOfAllConditions from '../screens/MedicalRecordContainer/VisitsHistoryOfAllConditions'

class MedicalRecordContainer extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="section-container">
        <AddADoctorVisit/>
        <OneVisitSummary/>
        <VisitsHistoryOfOneCondition />
        <VisitsHistoryOfAllConditions />
      </div>
     );
  }
}
 
export default MedicalRecordContainer;