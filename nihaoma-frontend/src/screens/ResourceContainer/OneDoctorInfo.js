import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"

class OneDoctorInfo extends Component {

  render() {

    const screenContent = (
    <>
      <p>{this.props.selectedDoctor.doctor_name}</p>
      <p>{this.props.selectedDoctor.ROLE}</p>
      <p>{this.props.selectedDoctor.FACILITY_NAME}</p>
      <p>{this.props.selectedDoctor.CITY}</p>
      <p>{this.props.selectedDoctor.STATE}</p>
      <p>{this.props.selectedDoctor.ZIP}</p>
      <p>{this.props.selectedDoctor.COUNTRY}</p>
    </>
    )




    return <PhoneFrame titleText = "Information on one doctor" 
      screenContent={screenContent}/>
    }

}


const mapStateToProps = state => { 
  return { selectedDoctor: state.doctor.selectedDoctor} 
}

export default connect(mapStateToProps)(OneDoctorInfo)


