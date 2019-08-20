import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../reduxstore/user.js'
import PhoneFrame from "../../components/Phoneframe"

class SubmitScreen extends Component {

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
    //submit user form data to user table to create new user, then get a token back, save to local storage and dispatch information to store
    fetch("http://localhost:3000/signup",{ 
        method: "post",
        headers: {
          "Content-Type":"application/json",
          "Accepts":"application/json"},
        body: JSON.stringify(this.state)
      })
    .then(res => res.json())
    .then(data => {
      //save token to localStorage
      localStorage.token = data.token;
      //dispatch user information to store
      this.props.signUp({user: this.state, token: data.token})
    })
  };

  screenContent = (
    <>
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Show me my groups, please. " />
      </form>
   </>
  )

  render() {
    return <PhoneFrame titleText = { "Welcome" } 
      screenContent={this.screenContent}/>
  }

}

const mapStateToProps = state => {
  return {
    // user: state.currentUser
  }
}

const mapDispatchToProps = {
    signUp: signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitScreen)

