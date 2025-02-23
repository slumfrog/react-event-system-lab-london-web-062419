import React, { Component } from "react";

class EyesOnMe extends Component {
  state = {};

  blur = () => {
    console.log("Hey! Eyes on me!");
  };

  focus = () => {
    console.log("Good!");
  };

  render() {
    return <button onFocus={this.focus} onBlur={this.blur}></button>;
  }
}

export default EyesOnMe;
