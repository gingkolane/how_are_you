import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"

class MyRecordsOfOneCondition extends Component {

  screenContent = (
    <>
    <h1>This is my records on one condition</h1>
    {this.props.myRecords.map(record => 
    <p key={record.id} id={record.id} onClick={this.handleClick}> `{record.date_of_vist}: {record.myCondition}`</p>)}
    </>
  )

 render() {
  console.log("this.props inside MyRecordsOfOneCondition", this.props)
   return <PhoneFrame titleText = {" Records Of One Condition"} 
     screenContent={this.screenContent}/>
  }
}

const mapStateToProps = state => { 
  return { myRecords: state.record.myRecords } 
}

export default connect(mapStateToProps)(MyRecordsOfOneCondition)