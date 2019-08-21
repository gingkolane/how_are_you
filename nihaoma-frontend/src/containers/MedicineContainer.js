import React, { Component } from 'react';
// import Phoneframe from '../components/Phoneframe.js';
import AddOneDrug from '../screens/MedicineContainer/AddOneDrug'
import OneDrugInfo from '../screens/MedicineContainer/OneDrugInfo'
// import MyDrugsByCondition from '../screens/MedicineContainer/MyDrugsByCondition'

class MedicineContainer extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="section-container">
        <AddOneDrug />
        <OneDrugInfo />
        {/* <MyDrugsByCondition /> */}
      </div>
     );
  }
}
 
export default MedicineContainer;