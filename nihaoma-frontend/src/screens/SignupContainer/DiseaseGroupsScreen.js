import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { createNewGroupsUser } from '../../reduxstore/groupsUser.js'
import PhoneFrame from "../../components/Phoneframe"
import '../../stylesheets/Phoneframe.css';

class DiseaseGroupsScreen extends Component {
  
  state = {
    group_name: '',

    groups_user: {
      group_id: null,
      // user_id: this.props.current_user.id
    }

  }

  handleChange = (e) => {
    this.setState({group_name: e.target.value})
  }

  handleOnClick = (e) => {
    //submit selected group to groups_users table to create new groupsUser, then send the new groupsUser to store
    fetch("http://localhost:3000/groups_users",{ 
        method: "post",
        headers: {
          "Content-Type":"application/json",
          "Accepts":"application/json"},
        body: JSON.stringify(this.state.groups_user)
      })
    .then(res => res.json())
    .then(data => {
      //dispatch new groups_user information to store
      this.props.createNewGroupsUser({ groups_user: data.groups_user })
    })
  };

  screenContent = (
    <div className="toc-buttons">
     <h6>Disease groups you might be interested in:</h6>
     
      <button onClick={this.handleOnClick}> Stage I/II lung cancer </button>
              
      <button onClick={this.handleOnClick}> Stage III lung cancer </button>
             
      <button onClick={this.handleOnClick}> Stage IV lung cancer </button>
    </div>
  )

  render() {
    return <PhoneFrame titleText = { "Disease Groups" } 
     screenContent={this.screenContent}/>
  }

}
 

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = {
  // createNewGroupsUser: createNewGroupsUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseGroupsScreen)
