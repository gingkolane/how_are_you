import React, { Component } from 'react';
import '../stylesheets/Phoneframe.css';
import Phoneframe from '../components/Phoneframe.js';

class ConditionIHaveScreen extends Component {
  
  state = {
    currentDisease: ''
    }

  render() { 
    return ( 
      <div class="iphone-container">
        <div class="iphone">
          
          <div class="top-bar">
            <div class="speaker"></div> 
            <div class="camera"></div> 
            <div class="camera-2"></div> 
          </div>
          
          <div class="screen">
            <h3>The condition I have is</h3>
            <form onSumbit="handleDiseaseSubmit">
              <input type="text" value={this.state.currentDisease} onChange={this.handleChange} name="currentDisease" placeholder="Please put in the condition name" />
            </form>
          </div>

          <div class="button">      
          </div>

        </div>

      </div>
     );
  }
}
 
export default ConditionIHaveScreen;