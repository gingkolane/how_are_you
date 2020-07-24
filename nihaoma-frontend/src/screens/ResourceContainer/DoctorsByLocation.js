import React, { Component } from 'react'
import PhoneframeForResource from "../../components/PhoneframeForResource"
import { connect } from 'react-redux'
import { getSelectedDoctor} from '../../reduxstore/doctor.js'


class DoctorsByLocation extends Component {

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

      <input placeholder="Search by city" type="text" value={this.state.CITY} onChange={this.handleChange} name="CITY" />


      <div>
        {this.props.doctorsOfSelectedCondition.filter(doctor => doctor.CITY === this.state.searchTerm).map(doctor => 
        <p key={doctor.id} id={doctor.id} onClick={this.handleClick}> {doctor.FACILITY_NAME}: {doctor.doctor_name}</p>)}
      </div>

    </div>
  )

   return <PhoneframeForResource titleText = "Search doctors by City" 
     screenContent={screenContent}/>
  }
  
}


const mapStateToProps = state => {
  return { doctorsOfSelectedCondition: state.doctor.doctorsOfSelectedCondition } 
}

const mapDispatchToProps = {
  getSelectedDoctor
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsByLocation)

