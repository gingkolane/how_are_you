import React, { Component } from 'react';
import WelcomeScreen from "../screens/SignupContainer/WelcomeScreen"
import DiseaseGroupsScreen from "../screens/SignupContainer/DiseaseGroupsScreen.js"
import OfficalGroupsScreen from "../screens/SignupContainer/OfficalGroupsScreen.js"
import InterestGroupsScreen from "../screens/SignupContainer/InterestGroupsScreen.js"
import SubmitScreen from "../screens/SignupContainer/SubmitScreen"

class SignupContainer extends Component {

  render() { 
    return ( 
      <div className="section-container-5phone">
        <WelcomeScreen />
        <DiseaseGroupsScreen />
        <OfficalGroupsScreen />
        <InterestGroupsScreen />
        <SubmitScreen/>
      </div>
     );
  }
}
 
export default SignupContainer;