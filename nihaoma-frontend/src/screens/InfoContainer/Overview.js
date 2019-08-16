import React, { Component } from 'react'

class Overview extends Component {

  render() {
    return (
      <div className="iphone-container" onClick={() => this.props.getRandomCondition({chloe: [], eric: "2"})}>
        <div className="iphone">
          <div className="top-bar">
            <div className="speaker"></div> 
            <div className="camera"></div> 
            <div className="camera-2"></div> 
          </div>
          
          <div className="screen">

          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper gravida mi ultricies accumsan. Nunc ut libero et dolor tempus aliquam. Praesent sit amet tellus sed justo eleifend auctor in sed erat. Aliquam vehicula diam id tellus tincidunt, nec sollicitudin eros placerat. Praesent tincidunt, metus sed egestas rhoncus, nisl quam tristique metus, eu finibus enim libero quis nulla. In fringilla sagittis tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a urna et urna pulvinar sagittis molestie nec metus. Nam vulputate auctor diam, in condimentum tellus gravida a. Aliquam erat volutpat. Praesent luctus, purus at dignissim iaculis, lacus nulla dignissim eros, sed efficitur lectus lectus at urna.

            Phasellus fermentum ante at nulla malesuada molestie. Maecenas at scelerisque diam. Curabitur nec nisi gravida, elementum dui non, scelerisque leo. Mauris viverra ligula aliquet, feugiat ligula at, congue diam. Aliquam a sem non dolor mattis dapibus. Duis mollis ante magna, non blandit justo bibendum at. Integer egestas metus eget sem consequat rutrum eu interdum lorem. Ut ullamcorper neque non sapien vestibulum sollicitudin.
          </p>

          </div>

          <div className="button"></div>
        </div>
      </div>
    ) 
  }
}

export default Overview

