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
            <div className="top-menu">
              <h2>Interest groups:</h2>
            </div>
            <div>
              <h6>Here are some relevant groups you might be interested in:</h6>
              <h4>Special interest groups:</h4>
              <button onClick={this.handleOnClick}> Meetup in New York City     + </button>
              
              <button onClick={this.handleOnClick}> Cart-T immunotherapy for lung cancer     + </button>
             
              <button onClick={this.handleOnClick}> Mount Sinai doctors    + </button>
           
            </div>

            
          </div>

          <div className="button">      
          </div>

        </div>

      </div>
     );
  }
}
 
export default InterestGroupSelectionScreen;