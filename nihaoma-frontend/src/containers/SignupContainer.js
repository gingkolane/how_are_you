import React, { Component } from 'react';
import SignupScreen from "../screens/SignupScreen"
import GroupSelectionScreen from "../screens/GroupSelectionScreen.js"


class SignupContainer extends Component {

  render() { 
    return ( 
      <div className="section-container">
        <SignupScreen />
        <GroupSelectionScreen />
      </div>
     );
  }
}
 
export default SignupContainer;