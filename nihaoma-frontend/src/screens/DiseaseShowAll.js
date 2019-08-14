import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDiseases, getRandomDisease } from '../slices/diseaseSlice.js'
// import { getDiseases } from '../slices/diseaseSlice_withEffects'

class DiseaseShowAll extends Component {

  componentDidMount() {
    // use with diseaseSlice-------------
    fetch("http://localhost:3000/diseases")
    .then(res => res.json())
    .then(diseases => {        
      const lessDiseases = diseases.slice(0, 10)
      this.props.getDiseases(lessDiseases)
    })
//use with diseaseSlice_withEffects
    // this.props.getDiseases()
  }

  render() {
    const showDiseases = this.props.diseases.map(disease => 
      <p key={disease.id}> {disease.disease_name}</p>
    )

    return (
      <div className="iphone-container" onClick={() => this.props.getRandomDisease({chloe: [], eric: "2"})}>
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
  // console.log("this is store inside diseaseshowall", state.diseaseSlice.all);
  return { diseases: state.disease.all }
}


// this place you can get functions like this
const mapDispatchToProps = {
  getDiseases,
  getRandomDisease
}

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseShowAll)


// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao