import React, { Component } from 'react';
import SignupScreen from "../screens/SignupScreen"
import ConditionIHaveScreen from "../screens/ConditionIHaveScreen.js"
import GroupSelectionScreen from "../screens/GroupSelectionScreen.js"


class SignupContainer extends Component {

  render() { 
    return ( 
      <div class="section-container">
        <SignupScreen />
        <ConditionIHaveScreen />
        <GroupSelectionScreen />
      </div>
     );
  }
}
 
export default SignupContainer;