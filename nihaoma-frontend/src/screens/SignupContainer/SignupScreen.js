import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../reduxstore/user.js'
// import { createConditionsUser } from '../../reduxstore/conditionsUser.js'
import { updateCurrentCondition } from '../../reduxstore/condition.js'

class SignupScreen extends Component {

  state = {
      username: '',
      password: '',
      myCondition: ''
  }

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value,
     })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //submit user form data to user table to create new user, then get a token back, save to local storage and dispatch user information to store
    fetch("http://localhost:3000/signup",{ 
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Accepts":"application/json"},
        body: JSON.stringify({
          user: {
            username: this.state.username,
            password: this.state.password,
            myCondition: this.state.myCondition
          },
        })
      })
    .then(res => res.json())
    .then(data => {
      //save token to localStorage
      localStorage.token = data.token;
      //dispatch user and condition information to its respective slice
      this.props.signUp({ user: data.user, token: data.token })
      this.props.updateCurrentCondition({ currentCondition: data.currentCondition })
    })

    //create a new conditionsUser joint table record, link user to its condition. 
    // First find condition id from myCondition input, get back foundCondition, send foundCondition to store's currentCondition
    // fetch("http://localhost:3000/conditions/findCondition",{ 
    //   method: "post",
    //   headers: {
    //     "Content-Type":"application/json",
    //     "Accepts":"application/json"},
    //   body: JSON.stringify(this.state.conditionsUser.myCondition)
    // })
    // .then(res => res.json())
    // .then(foundCondition => {
    //   //dispatch condition to store's currentCondition
    //   this.setState({ condition_id: foundCondition.id, })
    //   this.props.createConditionsUser({ conditionsUser: conditionsUser })
    //   this.props.updateCurrentCondition({ currentCondition: foundCondition })
    // })

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
              <label>
                My name is:
              <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
              </label>

              <label>
                My password:
                <input type="text" value={this.state.password} onChange={this.handleChange} name="password" />
              </label>

              <label>
                The condition I have is:
                <input type="text" value={this.state.myCondition} onChange={this.handleChange} name="myCondition" />
              </label>
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

// const mapStateToProps = state => {
//   return {
//     // user: state.currentUser
//   }
// }

const mapDispatchToProps = {
    signUp: signUp,
    // createConditionsUser: createConditionsUser,
    updateCurrentCondition: updateCurrentCondition
}

export default connect(null, mapDispatchToProps)(SignupScreen)

