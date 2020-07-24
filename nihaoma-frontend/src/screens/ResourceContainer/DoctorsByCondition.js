import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSelectedDoctor} from '../../reduxstore/doctor.js'
import PhoneframeForResource from "../../components/PhoneframeForResource"

class DoctorsByCondition extends Component {

  handleClick = (e) => {
    //select clicked doctor
      const doctor_id = parseInt(e.target.id)
      const selectedDoctor = this.props.doctorsOfSelectedCondition.find(doctor => doctor.id === doctor_id )
      this.props.getSelectedDoctor(selectedDoctor) 
    }


  render() {

    const screenContent = this.props.doctorsOfSelectedCondition.slice(0,10).map(doctor => 
      <p key={doctor.id} id={doctor.id} onClick={this.handleClick}> {doctor.doctor_name}</p>)
    
    return <PhoneframeForResource titleText = "Doctors for this condition" 
      screenContent={screenContent}/>
  
    }
  
}

const mapStateToProps = state => {
  return { doctorsOfSelectedCondition: state.doctor.doctorsOfSelectedCondition } 
}

const mapDispatchToProps = {
  getSelectedDoctor
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsByCondition)
