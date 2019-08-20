import React, { Component } from 'react';
import { connect } from 'react-redux'
import { persistUserWithToken } from './reduxstore/user'
import { getMyConditions } from './reduxstore/condition'

import './stylesheets/App.css';
import Typist from 'react-typist';
import SignupContainer from './containers/SignupContainer'
import InfoContainer from './containers/InfoContainer'
import ResourceContainer from './containers/ResourceContainer'
import CircleContainer from './containers/CircleContainer'
import MedicalRecordContainer from './containers/MedicalRecordContainer'
import MedicineContainer from './containers/MedicineContainer'

class App extends Component {
  
  //get user information using token, if localStorage has a token
  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/auth", {
        // headers: { Authorization: "bearer " + localStorage.token }
        headers: { Authorization: localStorage.token }
      })
      .then(resp => resp.json())
      .then(user => {
        console.log(user)
        this.props.persistUserWithToken(user)
        this.props.getMyConditions( { myConditions: user.myConditions} )
      })
    }
  }

  render() { 
    return ( 
      <>
        <div className="title-box">
          <Typist stdTypingDelay='250' className="title-text">
            This is an app supporting you, <br/>
            <br/>
            when you are fragile. <br/>
            <br/>
            It also helps those who care for you.<br/>
            <br/>
            And you can help others<br/>
            <br/>
            because you understand. <br/>
          </Typist>
        </div>

        <div className="title-box">
          <span className="title-text">You are with people who came down with the same thing...</span>
        </div>
        <SignupContainer />

        <div className="title-box">
          <span className="title-text">You can learn more about your condition and treatment options, you get the same information as the doctors have </span>
        </div>
        <InfoContainer />

        {/* <div className="title-box">
          <span className="title-text">You can share your experiences and knowledges with others...</span>
        </div>
        <CircleContainer /> */}

        <div className="title-box">
          <span className="title-text">You can find the best doctors in the fields...</span>
        </div>
        <ResourceContainer />

        <div className="title-box">
          <span className="title-text">You can keep track of your doctor visits and medical records</span>
        </div>
        <MedicalRecordContainer />

        <div className="title-box">
          <span className="title-text">And keep track of all the medicines in your cupboards and drawers...</span>
        </div>
        <MedicineContainer />

        <div className="title-box">
          <span className="title-text">Give it a try! </span>
        </div>
      </>
     );
  }
}
 
// const mapStateToProps = state => ({ user: state });

const mapDispatchToProps = {
  persistUserWithToken,
  getMyConditions
};

export default connect(null,mapDispatchToProps)(App)