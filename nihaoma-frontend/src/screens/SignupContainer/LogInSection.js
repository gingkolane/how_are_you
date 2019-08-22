import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logIn } from '../../reduxstore/user.js'
import { getMyConditions } from '../../reduxstore/condition.js'
import { getMyRecords, getMyRecordsInFull } from '../../reduxstore/record.js'
import { getMyTreatments, getMyTreatmentsGroupByConditions} from '../../reduxstore/treatment.js'
import { getMyDoctors } from '../../reduxstore/doctor.js'


class logInSection extends Component {

  //did not use require(:user) in api user_controller, so we don't need to have user key here
  //this set up is convenient for using [e.target.name]: e.target.value to setState
  state = {
    username: '',
    password: ''
  }

  handleLogInChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  //Log in fetch
  handleLogInSubmit = (e) => {
    e.preventDefault();
    //submit user form data to user table to create new user, then get a token back, save to local storage and dispatch user information to store
    fetch("http://localhost:3000/login",{ 
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Accepts":"application/json"},
        body: JSON.stringify(this.state)
      })
    .then(res => res.json())
    .then(data => {
    //fetch returns data are what render json give us, token, user, currentCondtion
      //save token to localStorage
      localStorage.token = data.token;
      //dispatch user and condition to its respective store slice
      this.props.logIn({ user: data.user, token: data.token })
      this.props.getMyConditions(data.myConditions)
      this.props.getMyRecords(data.myRecords)
      this.props.getMyRecordsInFull(data.myrecords_infull)
      this.props.getMyTreatments(data.myTreatments)
      this.props.getMyDoctors(data.myDoctors)
      this.props.getMyTreatmentsGroupByConditions(data.condition_with_treatment)
      this.props.getMyRecordsInFull(data.myrecords_infull)

    })

    //after fetch, clear the form
    this.setState({
      username: '',
      password: '',
      myCondition: ''
    })
  };
 
   render() {
     return (
      <div className="box-inside-screen">
        <form onSubmit={this.handleLogInSubmit}>
          <input placeholder="Username" type="text" value={this.state.username} onChange={this.handleLogInChange} name="username" />
          <br/>
          <input placeholder="Password" type="text" value={this.state.password} onChange={this.handleLogInChange} name="password" />
          <br/>
          <input type="submit" value="Log In" />
        </form>
      </div>
     )
   }

}

const mapDispatchToProps = {
    logIn,
    getMyConditions,
    getMyRecords,
    getMyTreatments,
    getMyDoctors,
    getMyTreatmentsGroupByConditions,
    getMyRecordsInFull
}

export default connect(null, mapDispatchToProps)(logInSection)

