import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"

class AddOneRecord extends Component {

  state = {
    date_of_visit: '',
    myCondition: '',
    doctor_name: '',
    FACILITY_NAME: '', 
    CITY: '',
    treatment_name: ''
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    //create a new record
    fetch("http://localhost:3000/records", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accepts":"application/json"
      },
      body: JSON.stringify({
        ...this.state,
        user_id: this.props.currentUser.id
      })
    }).then(resp => resp.json())
    .then(data => { this.props.getCurrentCondition(data.condition)})

    // after fetch, clear the form
    this.setState({
      date_of_visit: '',
      myCondition: '',
      doctor_name: '',
      FACILITY_NAME: '', 
      CITY: '',
      treatment_name: ''
      })

  };

  screenContent = () => { return (
    <>
      <form onSubmit={this.handleSubmit}>

        <label>
          When is your visit?
        <input type="text" value={this.state.date_of_visit} onChange={this.handleChange} name="date_of_visit" />
        <br/>
        </label>

        <label>
          Who treated it?
          <input type="text" value={this.state.doctor_name} onChange={this.handleChange} name="doctor_name" />
          <br/>
        </label>

        <label>
          What did you get?
          <input type="text" value={this.state.myCondition} onChange={this.handleChange} name="myCondition" />
          <br/>
        </label>

        <label>
          Picture of your visit record
          <input type="text" value={this.state.imgOfRecord} onChange={this.handleChange} name="imgOfRecord" />
          <br/>
        </label>

        <label>
          Add perscribed drugs, if any. 
          <input type="text" value={this.state.treatment_name} onChange={this.handleChange} name="treatment_name" />
          <button onClick={this.addADrug}> + </button>
          <br/>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

 render() {
   return <PhoneFrame titleText = { "Add A Doctor Visit" } 
     screenContent={this.screenContent()}/>
  }
  
}

const mapStateToProps = state => { 
  return { currentUser: state.user.currentUser } 
}

// const mapDispatchToProps= { 
//   getCurrentCondition
// }

export default connect(mapStateToProps)(AddOneRecord)

// mapDispatchToProps