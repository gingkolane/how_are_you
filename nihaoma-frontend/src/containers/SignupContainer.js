import React, { Component } from 'react';
import WelcomeScreen from "../screens/SignupContainer/WelcomeScreen"
import ConditionSubgroupSelectionScreen from "../screens/SignupContainer/ConditionSubgroupSelectionScreen.js"
import OfficalGroupSelectionScreen from "../screens/SignupContainer/OfficalGroupSelectionScreen.js"
import InterestGroupSelectionScreen from "../screens/SignupContainer/InterestGroupSelectionScreen.js"
import SubmitScreen from "../screens/SignupContainer/SubmitScreen"

class SignupContainer extends Component {

  render() { 
    return ( 
      <div className="section-container">
        <WelcomeScreen />
        <ConditionSubgroupSelectionScreen />
        <OfficalGroupSelectionScreen />
        <InterestGroupSelectionScreen />  */}
        <SubmitScreen/>
      </div>
     );
  }
}
 
export default SignupContainer;