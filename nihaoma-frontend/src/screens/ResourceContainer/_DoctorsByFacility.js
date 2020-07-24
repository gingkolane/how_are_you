import React, { Component } from 'react'
import PhoneframeForResource from "../../components/PhoneframeForResource"
import { connect } from 'react-redux'
import { getSelectedDoctor } from '../../reduxstore/doctor.js'


class DoctorsByFacility extends Component {

  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleClick = (e) => {
    //select clicked doctor
      const doctor_id = parseInt(e.target.id)
      const selectedDoctor = this.props.doctorsOfSelectedCondition.find(doctor => doctor.id === doctor_id )
      this.props.getSelectedDoctor(selectedDoctor) 
    }

 render() {

  const screenContent = (
    <div>
 
      <input placeholder="Search by facility" type="text" value={this.state.FACILITY_NAME} onChange={this.handleChange} name="FACILITY_NAME" />


      <div>
        {this.props.doctorsOfSelectedCondition.filter(doctor => doctor.FACILITY_NAME === this.state.searchTerm).map(doctor => 
        <p key={doctor.id} id={doctor.id} onClick={this.handleClick}> {doctor.doctor_name}</p>)}
      </div>

    </div>
  )

   return <PhoneframeForResource titleText = "Search doctors by facility" 
     screenContent={screenContent}/>
  }
  
}


const mapStateToProps = state => {
  return { doctorsOfSelectedCondition: state.doctor.doctorsOfSelectedCondition } 
}

const mapDispatchToProps = {
  getSelectedDoctor
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsByFacility)

