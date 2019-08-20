import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"

class MyRecords extends Component {

  genMyRecords = () => {
    console.log(this.props.myRecords);
    return this.props.myRecords.map(record => {
      return (
      <p key={record.id} >{record.date_of_visit}: {record.myCondition} </p> )
    })
  }

 
  screenContent = () => {
    return (
      <>
      <h1>This is MyRecords</h1>
        {this.genMyRecords()}
      </>
    )
  }  

  render() {
    // debugger
    if (this.props.myRecords.length === 0) {
      return(<p>loading for records</p>)
    }
    console.log(this.props.myRecords)
   return <PhoneFrame titleText = { "MyRecords" } 
     screenContent={this.screenContent()}/>
  }

}

const mapStateToProps = state => {
  return { myRecords: state.record.myRecords }
}

export default connect(mapStateToProps)(MyRecords)


