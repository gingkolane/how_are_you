import React, { Component } from 'react';
import AddOneRecord from '../screens/RecordContainer/AddOneRecord'
import MyRecordsOfOneCondition from '../screens/RecordContainer/MyRecordsOfOneCondition'
import MyRecords from '../screens/RecordContainer/MyRecords'

class RecordContainer extends Component {
  
  render() { 
    return ( 
      <div className="section-container">
        <MyRecords />
        <MyRecordsOfOneCondition />
        <AddOneRecord/>
      </div>
     );
  }
}
 
export default RecordContainer;