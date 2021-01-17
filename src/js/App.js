import React, { Component } from "react";
import Counters from "./components/Counters";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Counters description="Example of a functional component." color="#f1f1f1" />
      </div>
    );
  }
}

export default App;
