import React, { Component } from 'react';
// import DiseaseShowCurrent from '../screens/DiseaseShowCurrent.js';
import DiseaseShowAll from '../screens/DiseaseShowAll.js'


class InfoContainer extends Component {

  render() { 
    return ( 
      <div className="section-container">
        {/* <DiseaseShowCurrent /> */}
        <DiseaseShowAll />
      </div>
     );
  }
}
 
export default InfoContainer;