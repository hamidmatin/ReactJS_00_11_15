import React, { Component } from "react";
import ClassComponentLifecycle from "./class-component-lifecycle";

export default class StateInClassComponent extends Component {
  constructor() {
    
    super();
    this.state = {
      isVisible: false,
      message: "Class Component Lifecycle",
    };
  }

  toggleHandler = () => {
    this.setState({
      //   ...this.state,
      isVisible: !this.state.isVisible,
    });
    // console.log(this.state);
  };

  changeMessageHandler = () => {
    this.setState({
      message: this.state.message + ", New Message added",
    });
  };

  render() {
    return (
      <div>
        <h2>State In Class Component and Events</h2>

        <hr />
        <button onClick={this.toggleHandler}>Toggle</button>
        <button onClick={this.changeMessageHandler}>Change Message</button>
        
        <button onClick={()=>{console.clear()}}>Clear Console</button>

        {/* <div style={{ display: this.state.isVisible ? "block" : "none" }}>
          <ClassComponentLifecycle />
        </div> */}
        
        {this.state.isVisible ? (
          <ClassComponentLifecycle message={this.state.message} />
        ) : null}
      </div>
    );
  }

}
