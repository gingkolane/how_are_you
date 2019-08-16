import React, { Component } from 'react';
// import Phoneframe from '../components/Phoneframe.js';
import DoctorsByCondition from '../screens/ResourceContainer/DoctorsByCondition'
import OneDoctorInfo from '../screens/ResourceContainer/OneDoctorInfo'
import DoctorsByLocation from '../screens/ResourceContainer/DoctorsByLocation'
import DoctorsByConditionByFacility from '../screens/ResourceContainer/DoctorsByConditionByFacility'

class ResourceContainer extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="section-container">
        {/* All doctors treating this disease */}
        <DoctorsByCondition/>
        {/* Doctors near you */}
        <DoctorsByLocation />
        {/* Doctors in a specific hospital that can treat this disease */}
        <DoctorsByConditionByFacility />
        {/* Information on one doctor */}
        <OneDoctorInfo/>

      </div>
     );
  }
}
 
export default ResourceContainer;