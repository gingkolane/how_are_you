import React, { Component } from 'react';
import '../stylesheets/Phoneframe.css';
import { connect } from 'react-redux'
// import { signUp } from '../actions/userActions'

class SignupScreen extends Component {

  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    if (localStorage.token) {
      this.props.history.push("/profile")
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state.username, this.state.password)
      .then(()=> {
        this.props.history.push("/profile")
      })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (

      <div class="iphone-container">
      <div class="iphone">
        
        <div class="top-bar">
          <div class="speaker"></div> 
          <div class="camera"></div> 
          <div class="camera-2"></div> 
        </div>
        
        <div class="screen">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
            <input type="text" value={this.state.password} onChange={this.handleChange} name="password" />
            <input type="submit" value="Sign me up!" />
          </form>
          </div>

          <div class="button">      
          </div>

        </div>

      </div>



    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
    // signUp: signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
