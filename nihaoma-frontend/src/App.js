import React from 'react'
import './stylesheets/App.css';
import LoginContainer from './containers/LoginContainer'
import InfoContainer from './containers/InfoContainer'
import ResourceContainer from './containers/ResourceContainer'
import CircleContainer from './containers/CircleContainer'
import VisitContainer from './containers/VisitContainer'
import MedicineContainer from './containers/MedicineContainer'


const App = () => {
  return (
    <>
      <div class="title-box">
        <p>This is an app that grows with you. </p>
      </div>

      <div class="title-box">
        <p>You are with people who came down with the same disease...</p>
      </div>
      <LoginContainer/>

      <div class="title-box">
        <p>You can learn more about your disease and treatment options, you get the same information as the doctors have </p>
      </div>
      <InfoContainer />

      <div class="title-box">
        <p>You can share your experiences and knowledges with others...</p>
      </div>
      <CircleContainer />

      <div class="title-box">
        <p>You can find the best doctors in the fields...</p>
      </div>
      <ResourceContainer />

      <div class="title-box">
        <p>You can keep track of your doctor visits and medical records</p>
      </div>
      <VisitContainer />

      <div class="title-box">
        <p>And keep track of all the medicines in your cupboards and drawers...</p>
      </div>
      <MedicineContainer />

      <div class="title-box">
        <p>Give it a try! </p>

      </div>
    </>
  )
}

export default App;