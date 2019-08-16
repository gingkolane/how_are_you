import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../reduxstore/user.js'
import { getCurrentCondition } from '../../reduxstore/condition.js'
import PhoneFrame from "../../components/Phoneframe"

class SignupScreen extends Component {

  //did not use require(:user) in api user_controller, so we don't need to have user key here
  //this set up is convenient for using [e.target.name]: e.target.value to setState
  state = {
    username: '',
    password: '',
    myCondition: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //submit user form data to user table to create new user, then get a token back, save to local storage and dispatch user information to store
    fetch("http://localhost:3000/signup",{ 
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
      this.props.signUp({ user: data.user, token: data.token })
      this.props.getCurrentCondition( {currentCondition: data.currentCondition} )
      // this.props.getCurrentCondition(data.currentCondition)
    })
  };

  screenContent = (
    <>
      <form onSubmit={this.handleSubmit}>
      <label>
        My name is:
      <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
      <br/>
      </label>

      <label>
        My password:
        <input type="text" value={this.state.password} onChange={this.handleChange} name="password" />
        <br/>
      </label>

      <label>
        The condition I have is:
        <input type="text" value={this.state.myCondition} onChange={this.handleChange} name="myCondition" />
        <br/>
      </label>
      <input type="submit" value="Sign me up!" />
        </form>
    </>
  )
 
   render() {
     return <PhoneFrame titleText = { "Welcome" } 
       screenContent={this.screenContent}/>
   }

}

const mapDispatchToProps = {
    signUp: signUp,
    getCurrentCondition: getCurrentCondition
}

export default connect(null, mapDispatchToProps)(SignupScreen)

