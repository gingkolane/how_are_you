import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDiseases } from '../slices/diseaseSlice.js'

class DiseaseShowAll extends Component {

  componentDidMount() {
    fetch("http://localhost:3000/diseases")
    .then(res => res.json())
    .then(diseases => {        
      const lessDiseases = diseases.slice(0, 10)
      this.props.getDiseases(lessDiseases)
      // we send lessDiseases to the store using dispatch
       // store.dispatch(getDiseases(lessDiseases));
    })
  }

  render() {
    const showDiseases = this.props.diseases.map(disease => 
      <p key={disease.id}> {disease.disease_name}</p>
    )

    return (
      <div className="iphone-container">
        <div className="iphone">
          <div className="top-bar">
            <div className="speaker"></div> 
            <div className="camera"></div> 
            <div className="camera-2"></div> 
          </div>
          
          <div className="screen">
            {showDiseases}
          </div>

          <div className="button">      
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { diseases: state.diseases.all }
}


// this place you can get functions like this
const mapDispatchToProps = {
  getDiseases: getDiseases
}

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseShowAll)
