import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"
import { List } from 'semantic-ui-react'

class MyDrugsByCondition extends Component {

  // const conditions = this.props.myConditions
  // const treatments = this.props.myTreatments

  screenContent = () => (
    
    <List bulleted>
      this.props.myConditions.forEach(condition => {

        <List.Item>condition.condition_name</List.Item>
        
        this.props.myTreatments.forEach(treatment => {

          if (treatment.conditions.includes(condition)) {
            <List.List>
              <List.Item>treatment.drug_name</List.Item>
            </List.List>
          }

        })

      })
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
