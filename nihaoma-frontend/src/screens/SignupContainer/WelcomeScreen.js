import React, { Component } from 'react';
import PhoneFrame from "../../components/Phoneframe"
import SignUpSection from "./SignUpSection"
import LogInSection from "./LogInSection"


class WelcomeScreen extends Component {

  screenContent = (
    <>
      <SignUpSection />
      <LogInSection />
    </>
  )
 
   render() {
     return <PhoneFrame titleText = { "Welcome" } 
       screenContent={this.screenContent}/>
   }

}

export default WelcomeScreen

