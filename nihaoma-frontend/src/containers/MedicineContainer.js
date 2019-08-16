import React, { Component } from 'react';
// import Phoneframe from '../components/Phoneframe.js';
import AddADrug from '../screens/MedicineContainer/AddADrug'
import OneDrugInfo from '../screens/MedicineContainer/OneDrugInfo'
import AllDrugsByCondition from '../screens/MedicineContainer/AllDrugsByCondition'

class MedicineContainer extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="section-container">
        <AddADrug />
        <OneDrugInfo />
        <AllDrugsByCondition />
      </div>
     );
  }
}
 
export default MedicineContainer;