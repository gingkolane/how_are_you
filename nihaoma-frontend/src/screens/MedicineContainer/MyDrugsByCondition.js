import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"
import { List } from 'semantic-ui-react'

class MyDrugsByCondition extends Component {

  // const conditions = this.props.myConditions
  // const treatments = this.props.myTreatments
  // name = "Chloe"
  // screenContent = sadfasd => {}

  renderContent = () => {
    return this.props.myConditions.map(condition => {
      const treatments = this.props.myTreatments.map(treatment => {
        // debugger
        // if (treatment.conditions.includes(condition)) {
          return <li className="li-bullet">{treatment.treatment_name}</li>
  
        // }
      })
      return (
        <React.Fragment>
            <h2 className="ul-bold">{condition.condition_name}</h2>
            <ul>{treatments}</ul>
            
              

        </React.Fragment>
      )
    })
  }
  
  screenContent = () => (
  
    <List bulleted>
      {this.renderContent()}
    </List>
  )
  render() {


    return <PhoneFrame titleText = "My Medicine Box" screenContent={this.screenContent()}/>
  }
}

const mapStateToProps = state => {
  return { 
    myTreatments: state.treatment.myTreatments,
    myConditions: state.condition.myConditions
   }
}

export default connect(mapStateToProps)(MyDrugsByCondition)
