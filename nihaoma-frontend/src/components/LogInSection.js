import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logIn } from '../reduxstore/user.js'
import { getMyConditions } from '../reduxstore/condition.js'
import { getMyRecords } from '../reduxstore/record.js'
import { getMyTreatments } from '../reduxstore/treatment.js'
import { getMyDoctors } from '../reduxstore/doctor.js'


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
      this.props.getMyConditions( { myConditions: data.myConditions} )
      this.props.getMyRecords( { myRecords: data.myRecords} )
      this.props.getMyTreatments( { myTreatments: data.myTreatments} )
      this.props.getMyDoctors( { myDoctors: data.myDoctors} )
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
      <>
      <form onSubmit={this.handleLogInSubmit}>
        <h4>~~~ Or log In ~~~</h4>
        <label>My name is:
          <input type="text" value={this.state.username} onChange={this.handleLogInChange} name="username" />
          <br/>
        </label>

        <label>My password:
        <input type="text" value={this.state.password} onChange={this.handleLogInChange} name="password" />
        <br/>
        </label>

        <input type="submit" value="Log me in" />
      </form>

    </>
     )
   }

}

const mapDispatchToProps = {
    logIn: logIn,
    getMyConditions: getMyConditions,
    getMyRecords,
    getMyTreatments,
    getMyDoctors
}

export default connect(null, mapDispatchToProps)(logInSection)

