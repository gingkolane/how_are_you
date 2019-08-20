import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getDoctors } from '../../reduxstore/doctor.js'
// import { getselectedCondition } from '../../reduxstore/condition.js'

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
      this.props.currentDoctor
      {/* <p key={doctor.id}> {doctor.doctor_name}</p>) */}
    </>
  )

 render() {
   return <PhoneFrame titleText = { "This is doctors by condition" } 
     screenContent={this.screenContent}/>
  }
  
}

const mapStateToProps = state => {
  return { selectedCondition: state.selectedCondition }
}


// this place you can get functions like this
const mapDispatchToProps = {
  // getDoctors,
  // getselectedCondition
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsByCondition)


