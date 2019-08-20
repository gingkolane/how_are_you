import React, { Component } from 'react';
import AddADoctorVisit from '../screens/MedicalRecordContainer/AddADoctorVisit'
import VisitsHistoryOfOneCondition from '../screens/MedicalRecordContainer/VisitsHistoryOfOneCondition'
import VisitsHistoryOfAllConditions from '../screens/MedicalRecordContainer/VisitsHistoryOfAllConditions'

class MedicalRecordContainer extends Component {
  
  render() { 
    return ( 
      <div className="section-container">
        <AddADoctorVisit/>
        <VisitsHistoryOfOneCondition />
        <VisitsHistoryOfAllConditions />
      </div>
     );
  }
}
 
export default MedicalRecordContainer;