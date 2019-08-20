import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../reduxstore/user.js'
import { getMyConditions } from '../../reduxstore/condition.js'
import PhoneFrame from "../../components/Phoneframe"

class SignupScreen extends Component {

  //did not use require(:user) in api user_controller, so we don't need to have user key here
  //this set up is convenient for using [e.target.name]: e.target.value to setState
  state = {
    username: '',
    password: '',
    myCondition: ''
  }

  handleSignupChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  //Sign up fetch
  handleSignupSubmit = (e) => {
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
      this.props.getMyConditions( {myConditions: data.myConditions} )
      // this.props.getselectedCondition(data.selectedCondition)
    })
  };


  //Log in fetch
  handleLoginSubmit = (e) => {
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
      this.props.login({ user: data.user, token: data.token })
      this.props.getMyConditions( {myConditions: data.myConditions} )
      // this.props.getselectedCondition(data.selectedCondition)
    })
  };




  screenContent = () => (
    <>
      {/* sign up form */}
      <form onSubmit={this.handleSignupSubmit}>
        <h4>~~~ Sign Up ~~~</h4>
        <label>
          My name is:
        <input type="text" value={this.state.username} onChange={this.handleSignupChange} name="username" />
        <br/>
        </label>

        <label>
          My password:
          <input type="text" value={this.state.password} onChange={this.handleSignupChange} name="password" />
          <br/>
        </label>

        <label>
          The condition I have is:
          <input type="text" value={this.state.myCondition} onChange={this.handleSignupChange} name="myCondition" />
          <br/>
        </label>
        <input type="submit" value="Sign me up" />
      </form>


<br/>
<br/>
<br/>

      {/* login form */}
      <form onSubmit={this.handleLoginSubmit}>
        <h4>~~~ Or log In ~~~</h4>
        <label>My name is:
          <input type="text" value={this.state.username} onChange={this.handLoginleChange} name="username" />
          <br/>
        </label>

        <label>My password:
        <input type="text" value={this.state.password} onChange={this.handLoginleChange} name="password" />
        <br/>
        </label>

        <input type="submit" value="Log me in" />
      </form>

    </>
  )
 
   render() {
     return <PhoneFrame titleText = { "Welcome" } 
       screenContent={this.screenContent()}/>
   }

}

const mapDispatchToProps = {
    signUp: signUp,
    login: login,
    getMyConditions: getMyConditions
}

export default connect(null, mapDispatchToProps)(SignupScreen)

