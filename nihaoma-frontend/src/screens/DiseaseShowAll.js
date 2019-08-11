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
      <p> {disease.disease_name}</p>
    )

    return (
      <div class="iphone-container">
        <div class="iphone">
          <div class="top-bar">
            <div class="speaker"></div> 
            <div class="camera"></div> 
            <div class="camera-2"></div> 
          </div>
          
          <div class="screen">
            {showDiseases}
          </div>

          <div class="button">      
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { diseases: state.diseases.all }
}

const mapDispatchToProps = dispatch => ({
  getDiseases: (diseases) => dispatch(getDiseases(diseases))
})

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseShowAll)
