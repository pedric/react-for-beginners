import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/navbar";

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 4 },
        { id: 3, value: 0 },
        { id: 4, value: 3 },
      ]
    }
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDelete = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0
      return counter
    })
    this.setState({ counters })
  }

  totalItems = () => {
    const activeCounters = this.state.counters.filter(counter => counter.value > 0);
    this.setState({ totalNumberOfItems : activeCounters.length })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar numberOfItems={this.state.counters.filter(c => c.value > 0).length} />
        <Counters
        counters={this.state.counters}
        Reset={this.handleReset}
        Delete={this.handleDelete}
        Increment={this.handleIncrement} />
      </React.Fragment>
    );
  }
}

export default App;
