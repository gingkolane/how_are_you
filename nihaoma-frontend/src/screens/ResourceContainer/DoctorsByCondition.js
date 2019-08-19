import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDoctors } from '../../reduxstore/doctor.js'
import { getCurrentCondition } from '../../reduxstore/condition.js'

import PhoneFrame from "../../components/Phoneframe"

class DoctorsByCondition extends Component {

  //get current condition from store, then look for doctors treating this condition
  componentDidMount() {
    fetch("http://localhost:3000/doctors")
    .then(res => res.json())
    .then(doctors => {      
      // this.props.doctorsByCondition
    })
  }

  screenContent = (
    <>
      this.state.doctorsByCondition.map(doctor => 
      {/* <p key={doctor.id}> {doctor.doctor_name}</p>) */}
    </>
  )

 render() {
  // console.log("this id doctorByCondition", doctorsByCondition)

   return <PhoneFrame titleText = { "This is doctors by condition" } 
     screenContent={this.screenContent}/>
  }
  
}

const mapStateToProps = state => {
  return { doctorsByCondition: state.doctor.doctorsByCondition }
}


// this place you can get functions like this
const mapDispatchToProps = {
  getDoctors,
  getCurrentCondition
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsByCondition)


