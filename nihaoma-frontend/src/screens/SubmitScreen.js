import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../slices/userSlice.js'

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


  render() {
    return (
      <div className="iphone-container">
        <div className="iphone">
          
          <div className="top-bar">
            <div className="speaker"></div> 
            <div className="camera"></div> 
            <div className="camera-2"></div> 
          </div>
          
          <div className="screen">
            <form onSubmit={this.handleSubmit}>
              <input type="submit" value="Sign me up!" />
            </form>
          </div>

          <div className="button">      
          </div>

        </div>

      </div>
    );
  };
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

