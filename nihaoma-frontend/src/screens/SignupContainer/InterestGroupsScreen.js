import React, { Component } from 'react';
import '../../stylesheets/Phoneframe.css';
import PhoneFrame from "../../components/Phoneframe"

class InterestGroupsScreen extends Component {
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
    <div className="toc-buttons">
    <h6>Relevant interest groups you might be interested in:</h6>
    <button onClick={this.handleOnClick}> Meetup in New York City </button>
              
    <button onClick={this.handleOnClick}> Cart-T immunotherapy for lung cancer </button>
             
    <button onClick={this.handleOnClick}> Mount Sinai doctors </button>
    </div>
  )

  render() {
    return <PhoneFrame titleText = "Interest Groups" 
      screenContent={this.screenContent}/>
  }
  
}
 
export default InterestGroupsScreen;