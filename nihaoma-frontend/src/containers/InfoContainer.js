import React, { Component } from 'react';
// import conditionShowCurrent from '../screens/ConditionShowCurrent.js';
import ConditionShowAll from '../screens/InfoContainer/ConditionShowAll.js'


class InfoContainer extends Component {

  render() { 
    return ( 
      <div className="section-container">
        {/* <ConditionShowCurrent /> */}
        <ConditionShowAll />
      </div>
     );
  }
}
 
export default InfoContainer;