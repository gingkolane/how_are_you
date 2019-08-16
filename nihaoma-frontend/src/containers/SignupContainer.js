import React, { Component } from 'react';
import SignupScreen from "../screens/SignupContainer/SignupScreen"
import ConditionSubgroupSelectionScreen from "../screens/SignupContainer/ConditionSubgroupSelectionScreen.js"
import OfficalGroupSelectionScreen from "../screens/SignupContainer/OfficalGroupSelectionScreen.js"
import InterestGroupSelectionScreen from "../screens/SignupContainer/InterestGroupSelectionScreen.js"
import SubmitScreen from "../screens/SignupContainer/SubmitScreen"

class SignupContainer extends Component {

  render() { 
    return ( 
      <div className="section-container">
        <SignupScreen />
        <ConditionSubgroupSelectionScreen />
        <OfficalGroupSelectionScreen />
        <InterestGroupSelectionScreen />  */}
        <SubmitScreen/>
      </div>
     );
  }
}
 
export default SignupContainer;