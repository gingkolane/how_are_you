import React, { Component } from 'react';
import '../../stylesheets/Phoneframe.css';
import PhoneFrame from "../../components/Phoneframe"

class InterestGroupSelectionScreen extends Component {
  state = {
    group: {
      group_id: null,
      group_type: "interest_group",
      group_name: ''
    }
  }

  handleChange = (e) => {
    this.setState({ interest_group: e.target.value })
  }

  screenContent = (
    <>
    <h6>Here are some relevant groups you might be interested in:</h6>
    <h4>Special interest groups:</h4>
    <button onClick={this.handleOnClick}> Meetup in New York City     + </button>
              
    <button onClick={this.handleOnClick}> Cart-T immunotherapy for lung cancer     + </button>
             
    <button onClick={this.handleOnClick}> Mount Sinai doctors    + </button>
    </>
  )

  render() {
    return <PhoneFrame titleText = { "Interest groups:" } 
      screenContent={this.screenContent}/>
  }
  
}
 
export default InterestGroupSelectionScreen;