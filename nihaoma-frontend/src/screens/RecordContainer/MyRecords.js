import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"

class MyRecords extends Component {

  render() {

  const screenContent = this.props.myRecords.map(record => 
    <p key={record.id} >{record.date_of_visit}: {record.myCondition} </p> )
    
   return <PhoneFrame titleText = "My medical records" screenContent={screenContent}/>
  }

}

const mapStateToProps = state => {
  return { myRecords: state.record.myRecords }
}

export default connect(mapStateToProps)(MyRecords)


