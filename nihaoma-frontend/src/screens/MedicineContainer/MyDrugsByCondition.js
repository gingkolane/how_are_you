import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhoneFrame from "../../components/Phoneframe"
import { List } from 'semantic-ui-react'

class MyDrugsByCondition extends Component {

  screenContent = () => {
    return ( this.props.myTreatmentsGroupByConditions.map(conditionTreatments => { 
      return (<List as='ul'>
        <List.Item as='li'>{conditionTreatments.name}
          <List.List as='ul'>
            {conditionTreatments.treatments.map(treatment => <List.Item as='li'>{treatment.treatment_name}</List.Item>)}
          </List.List>
        </List.Item>
      </List>)
    })
  )}

  render() {

    console.log("this is the this.props inside mydrugsbyCondition", this.props)

    return <PhoneFrame titleText = "My Medicine Box" screenContent={this.screenContent()}/>
  }

}

const mapStateToProps = state => {
  return { 
    myTreatmentsGroupByConditions: state.treatment.myTreatmentsGroupByConditions
   }
}

export default connect(mapStateToProps)(MyDrugsByCondition)


