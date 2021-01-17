import React from "react";
import FunctionalComponent from "./components/FunctionalComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <FunctionalComponent description="Example of a functional component." color="#f1f1f1" />
      </div>
    );
  }
}

export default App;
