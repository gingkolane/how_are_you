import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"

class AddOneDrug extends Component {

  state = {
    drug_name:''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    
    e.preventDefault();

    //submit user form data to user table to create new user, then get a token back, save to local storage and dispatch user information to store
    fetch("http://localhost:3000/drugs",{ 
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Accepts":"application/json"},
        body: JSON.stringify(this.state)
      })

    //after fetch, clear the form
    this.setState({
      drug_name:''
    })
  };

 render() {

  const screenContent = (
    <>
      <form onSubmit={this.handleSignUpSubmit}>
        <h4>Enter the drug name:</h4>
        <label>
          <input type="text" value={this.state.treatment_name} onChange={this.handleChange} name="treatment_name" />
          <br/>
        </label>

        <h4>Or scan the code on the medicine box</h4>
          <img src='../../assets/qrcode.png' alt="qrcode" height="42" width="42"/> 
        <br/>
        <input type="submit" value="Add a drug" />
      </form>
    </>
  )

   return <PhoneFrame titleText = { "Add A Drug" } 
     screenContent={screenContent}/>
  }
}

export default AddOneDrug

