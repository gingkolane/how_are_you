import React, { Component } from 'react';
import DoctorsByCondition from '../screens/ResourceContainer/DoctorsByCondition'
import DisplayOneDoctor from '../screens/ResourceContainer/DisplayOneDoctor'
import DoctorsByLocation from '../screens/ResourceContainer/DoctorsByLocation'
// import DoctorsByFacility from '../screens/ResourceContainer/DoctorsByFacility'

class ResourceContainer extends Component {
  
  render() { 
    return ( 
      <div className="section-container">
        {/* All doctors treating this disease */}
        <DoctorsByCondition/>
        {/* Doctors near you */}
        <DoctorsByLocation />
        {/* Doctors in a specific hospital that can treat this disease */}
        {/* <DoctorsByFacility /> */}
        {/* Information on one doctor */}
        <DisplayOneDoctor/>

      </div>
     );
  }
}
 
export default ResourceContainer;