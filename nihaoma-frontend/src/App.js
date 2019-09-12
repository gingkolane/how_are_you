import React, { Component } from 'react';
import { connect } from 'react-redux'
import { persistUserWithToken } from './reduxstore/user'
import { getMyConditions } from './reduxstore/condition'
import { getMyRecords,getMyRecordsInFull } from './reduxstore/record'
import { getMyTreatments, getMyTreatmentsGroupByConditions} from './reduxstore/treatment'
import { getMyDoctors } from './reduxstore/doctor'

import './stylesheets/App.css';
import './stylesheets/index.css'
import Typist from 'react-typist';
import SignupContainer from './containers/SignupContainer'
import InfoContainer from './containers/InfoContainer'
import ResourceContainer from './containers/ResourceContainer'
// import CircleContainer from './containers/CircleContainer'
import RecordContainer from './containers/RecordContainer'
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
        // debugger
        this.props.persistUserWithToken(user)
        this.props.getMyConditions(user.myConditions)
        this.props.getMyRecords(user.myRecords)
        this.props.getMyRecordsInFull(user.myrecords_infull)
        this.props.getMyTreatments(user.myTreatments )
        this.props.getMyDoctors( user.myDoctors )
        this.props.getMyTreatmentsGroupByConditions(user.condition_with_treatment)
      })
    }
  }

  render() { 
    return ( 
      <>
        <div className="title-box">
          <Typist className="title-text" stdTypingDelay="150" >
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
        <SignupContainer/>

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
        <RecordContainer />

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
  getMyConditions,
  getMyRecords,
  getMyRecordsInFull,
  getMyTreatments,
  getMyDoctors,
  getMyTreatmentsGroupByConditions
};

export default connect(null,mapDispatchToProps)(App)