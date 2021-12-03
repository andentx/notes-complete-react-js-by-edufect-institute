import React, { Component } from "react";

class ThreeStrings extends Component {
  state = {
    s1: "React",
    s2: "JavaScript",
    s3: "Node.js",
  };

  showStrings = () => {
    let { s1, s2, s3 } = this.state;
    return (
      <React.Fragment>
        <p>{s1}</p>
        <p>{s2}</p>
        <p>{s3}</p>
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.showStrings()}</React.Fragment>;
  }
}

export default ThreeStrings;
