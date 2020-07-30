import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../reduxstore/user.js";
import { getMyConditions } from "../../reduxstore/condition.js";
import { getMyRecords } from "../../reduxstore/record.js";
import { getMyRecordsInFull } from "../../reduxstore/record.js";
import {
  getMyTreatments,
  getMyTreatmentsGroupByConditions,
} from "../../reduxstore/treatment.js";
import { getMyDoctors } from "../../reduxstore/doctor.js";

class SignUpSection extends Component {
  //did not use require(:user) in api user_controller, so we don't need to have user key here
  //this set up is convenient for using [e.target.name]: e.target.value to setState
  state = {
    username: "",
    password: "",
    myCondition: "",
  };

  handleSignUpChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Sign up fetch
  handleSignUpSubmit = (e) => {
    e.preventDefault();

    //submit user form data to user table to create new user, then get a token back, save to local storage and dispatch user information to store
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(this.state),
    })
      // .then((res) => res.json())
      .then((response) => response.text())
      .then(
        (data) => console.log(data)

        // {
        //   //fetch returns data are what render json give us, token, user, currentCondtion
        //   //save token to localStorage
        //   localStorage.token = data.token;

        //   //dispatch user and condition to its respective store slice
        //   this.props.signUp({ user: data.user, token: data.token });
        //   this.props.getMyConditions(data.myConditions);
        //   this.props.getMyRecords(data.myRecords);
        //   this.props.getMyRecordsInFull(data.myrecords_infull);
        //   this.props.getMyTreatments(data.myTreatments);
        //   this.props.getMyDoctors(data.myDoctors);
        //   this.props.getMyTreatmentsGroupByConditions(
        //     data.condition_with_treatment
        //   );
        // }
      );

    //after fetch, clear the form
    this.setState({
      username: "",
      password: "",
      myCondition: "",
    });
  };

  render() {
    return (
      <div className="box-inside-screen">
        <form onSubmit={this.handleSignUpSubmit}>
          <input
            placeholder="Username"
            type="text"
            value={this.state.username}
            onChange={this.handleSignUpChange}
            name="username"
          />
          <br />

          <input
            placeholder="Password"
            type="text"
            value={this.state.password}
            onChange={this.handleSignUpChange}
            name="password"
          />
          <br />

          <input
            placeholder="Condition I have"
            type="text"
            value={this.state.myCondition}
            onChange={this.handleSignUpChange}
            name="myCondition"
          />
          <br />

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signUp,
  getMyConditions,
  getMyRecords,
  getMyTreatments,
  getMyTreatmentsGroupByConditions,
  getMyDoctors,
  getMyRecordsInFull,
};

export default connect(null, mapDispatchToProps)(SignUpSection);
