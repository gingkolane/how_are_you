import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"

class VisitsHistoryOfOneCondition extends Component {

 render() {
console.log("this.props in record history", this.props)
    // const screenContent = this.props.myRecords.map(record => 
    //   <p key={record.id} id={record.id} onClick={this.handleClick}> `{record.date_of_vist}: {record.myCondition}`</p>)
return null
  //  return <PhoneFrame titleText = { "Visits History Of One Condition" } 
  //    screenContent={screenContent}/>
  // }
}
}
const mapStateToProps = state => { 
  return { myRecords: state.record.myRecords } 
}

export default connect(mapStateToProps)(VisitsHistoryOfOneCondition)