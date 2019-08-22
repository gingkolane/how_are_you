import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"
import { connect } from 'react-redux'

class OneDrugInfo  extends Component {


 render() {

  const screenContent = (
    <>
    Treatment name: 
     <p>{this.props.selectedTreatment.treatment_name}</p>
    Treatment type: 
    <p>{this.props.selectedTreatment.treatment_type}</p>

    Description: 
    <p>{this.props.selectedTreatment.DESCRIPTION}</p>
    </>
  )

   return <PhoneFrame titleText = { "Drug Description" } 
     screenContent={screenContent}/>
  }
}

const mapStateToProps = state => {
  return { 
    selectedTreatment: state.treatment.selectedTreatment
   }
}

export default connect(mapStateToProps)(OneDrugInfo)

