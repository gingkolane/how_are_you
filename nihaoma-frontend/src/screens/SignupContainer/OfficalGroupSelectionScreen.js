import React, { Component } from 'react';
import '../../stylesheets/Phoneframe.css';

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
              <h2>Official support groups:</h2>
            </div>
            <div>
              <h6>Here are some relevant groups you might be interested in:</h6>
              <h4>Official patient support organization:</h4>
              <button onClick={this.handleOnClick}> Macmillan Cancer Support     + </button>
              
              <button onClick={this.handleOnClick}> Anticancer club - Apricot Grove    + </button>
                        
            </div>

            
          </div>

          <div className="button">      
          </div>

        </div>

      </div>
     );
  }
}
 
export default OfficalGroupSelectionScreen;