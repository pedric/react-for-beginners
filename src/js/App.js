import React from "react";
import Example from "./components/Example";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Base component</h1>
        <Example />
      </div>
    );
  }
}

export default App;
