import React, { Component } from 'react';
import '../../stylesheets/Phoneframe.css';
import PhoneFrame from "../../components/Phoneframe"

class OfficalGroupsScreen extends Component {
  
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
    <div className="toc-buttons">
      <h6>Official support groups you might be interested in:</h6>
      <button onClick={this.handleOnClick}> Macmillan Cancer Support </button>        
      <button onClick={this.handleOnClick}> Anticancer club - Apricot Grove </button>
    </div>
  )

  render() {
    return <PhoneFrame titleText = "Official Support Groups"  
      screenContent={this.screenContent}/>
  }

}
 
export default OfficalGroupsScreen;