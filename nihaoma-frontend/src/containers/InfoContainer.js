import React, { Component } from 'react';
import MyConditions from '../screens/InfoContainer/MyConditions.js'
import ConditionTOCPlus from '../screens/InfoContainer/ConditionTOCPlus.js'

class InfoContainer extends Component {

  render() { 
    return ( 
      <div className="section-container">
        <MyConditions />
        <ConditionTOCPlus />
      </div>
     );
  }
}
 
export default InfoContainer;