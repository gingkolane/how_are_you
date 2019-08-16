import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"

class Diagnosis extends Component {

  screenContent = (
    <>
     <h4>Summary</h4>
       <p> Phasellus isi gravida, elementum dui non, lorem. Utullamcorper neque non sapien vestibulum sollicitudin.</p>
     <h4>Classification</h4>
       <p> Lorem ipsum dolor sit amet um dui non, lorem. Utullamcorper neque n</p>
     <h4>Stages</h4>
       <p> Phasellus isi gravida, elementum dui non, lorem. Utullamcorper neque non sapien vestibulum sollicitudin.</p>
   </>
  )

 render() {
   return <PhoneFrame titleText = { "Diagnosis for this condit:" } 
     screenContent={this.screenContent}/>
 }
}

export default Diagnosis

