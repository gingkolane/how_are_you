import React, { Component } from 'react'
import PhoneframeForMedicine from "../../components/PhoneframeForMedicine"
import qrcode from "../../assets/qrcode.png"

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
    <div className="toc-buttons">
      <form onSubmit={this.handleSignUpSubmit}>
        <h4>Enter the drug name:</h4>
        <label>
          <input type="text" value={this.state.treatment_name} onChange={this.handleChange} name="treatment_name" />
          <br/>
        </label>

        <h4>Or scan the code on the medicine box</h4>
          <img src={qrcode} alt="qrcode" height="100px" width="100px"/> 
        <br/>
        <br/>
        <input type="submit" value="Add a drug" />
      </form>
    </div>
  )

   return <PhoneframeForMedicine titleText = { "Add a drug" } 
     screenContent={screenContent}/>
  }
}

export default AddOneDrug

