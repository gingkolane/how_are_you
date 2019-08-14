import React, { Component } from 'react';
import SignupScreen from "../screens/SignupScreen"
import DiseaseSubgroupSelectionScreen from "../screens/DiseaseSubgroupSelectionScreen.js"
import OfficalGroupSelectionScreen from "../screens/OfficalGroupSelectionScreen.js"
import InterestGroupSelectionScreen from "../screens/InterestGroupSelectionScreen.js"
import SubmitScreen from "../screens/SubmitScreen"

class SignupContainer extends Component {

  render() { 
    return ( 
      <div className="section-container">
        <SignupScreen />
        <DiseaseSubgroupSelectionScreen />
        {/* <OfficalGroupSelectionScreen />
        <InterestGroupSelectionScreen /> */}
        <SubmitScreen/>
      </div>
     );
  }
}
 
export default SignupContainer;