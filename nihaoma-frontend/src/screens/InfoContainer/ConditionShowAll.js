import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getConditions } from '../../reduxstore/condition.js'
// import { getConditions } from '../slices/conditionSlice_withEffects'

class ConditionShowAll extends Component {

  componentDidMount() {
    fetch("http://localhost:3000/conditions")
    .then(res => res.json())
    .then(conditions => {        
      const lessConditions = conditions.slice(0, 10)
      this.props.getConditions(lessConditions)
    })
  }

  render() {
    const showConditions = this.props.conditions.map(condition => 
      <p key={condition.id}> {condition.condition_name}</p>
    )

    return (
      <div className="iphone-container" onClick={() => this.props.getRandomCondition({chloe: [], eric: "2"})}>
        <div className="iphone">
          <div className="top-bar">
            <div className="speaker"></div> 
            <div className="camera"></div> 
            <div className="camera-2"></div> 
          </div>
          
          <div className="screen">
            {showConditions}
          </div>

          <div className="button">      
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  // console.log("this is store inside conditionshowall", state.conditionSlice.all);
  return { conditions: state.condition.all }
}


// this place you can get functions like this
const mapDispatchToProps = {
  getConditions
}

export default connect(mapStateToProps, mapDispatchToProps)(ConditionShowAll)


// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao