import React, { Component } from 'react';
import '../../stylesheets/Phoneframe.css';
import PhoneFrame from "../../components/Phoneframe"

class OfficalGroupSelectionScreen extends Component {
  
  state = {
    group: {
      group_id: null,
      group_type: "official_group",
      group_name: ''
    }
  }

  handleChange = (e) => {
    this.setState({ official_group: e.target.value })
  }

  screenContent = (
    <>
      <h6>Here are some relevant groups you might be interested in:</h6>
      <h4>Official patient support organization:</h4>
      <button onClick={this.handleOnClick}> Macmillan Cancer Support     + </button>        
      <button onClick={this.handleOnClick}> Anticancer club - Apricot Grove    + </button>
    </>
  )

  render() {
    return <PhoneFrame titleText = { "Official support groups:" } 
      screenContent={this.screenContent}/>
  }

}
 
export default OfficalGroupSelectionScreen;