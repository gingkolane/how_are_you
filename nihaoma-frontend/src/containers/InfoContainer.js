import React, { Component } from 'react';
// import conditionShowCurrent from '../screens/ConditionShowCurrent.js';
import ConditionShowAll from '../screens/InfoContainer/ConditionShowAll.js'
import ConditionTOCPlus from '../screens/InfoContainer/ConditionTOCPlus.js'
import ConditionCurrentTreatment from '../screens/InfoContainer/ConditionShowAll.js'
import ConditionClinicalTrials from '../screens/InfoContainer/ConditionShowAll.js'

class InfoContainer extends Component {

  render() { 
    return ( 
      <div className="section-container">
        {/* <ConditionShowCurrent /> */}
        <ConditionTOCPlus />

        {/* <ConditionCurrentTreatment />
        <ConditionClinicalTrials />
        <ConditionShowAll /> */}
      </div>
     );
  }
}
 
export default InfoContainer;