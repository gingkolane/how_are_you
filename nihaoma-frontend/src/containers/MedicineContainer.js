import React, { Component } from 'react';
// import Phoneframe from '../components/Phoneframe.js';
import AddOneDrug from '../screens/MedicineContainer/AddOneDrug'
import OneDrugInfo from '../screens/MedicineContainer/OneDrugInfo'
import MyDrugsByCondition from '../screens/MedicineContainer/MyDrugsByCondition'
import 'semantic-ui-react'

class MedicineContainer extends Component {

  render() { 
    return ( 
      <div className="section-container">
        <MyDrugsByCondition />
        <OneDrugInfo />
        <AddOneDrug />
      </div>
     );
  }
}
 
export default MedicineContainer;