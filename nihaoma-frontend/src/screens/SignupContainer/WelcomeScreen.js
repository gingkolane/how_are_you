import React, { Component } from 'react';
import PhoneFrame from "../../components/Phoneframe"
import SignUpSection from "../../components/SignUpSection"
import LogInSection from "../../components/LogInSection"


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

