import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/navbar";

class App extends Component {
  
  //
  // This class component logs 1, 2, 3 to display the lifecycle hooks in the console.
  // constructor -> render -> componentDidMount
  //

  constructor(){
    super()
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ]
    }
    console.log('component lifecycle hooks displayed')
    console.log(1, 'constructor()')
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    if(counters[index].value > 0){
      counters[index].value--
      this.setState({ counters })
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

  componentDidMount(){
    console.log(3, 'componentDidMount()')
  }

  totalItems = () => {
    const activeCounters = this.state.counters.filter(counter => counter.value > 0);
    this.setState({ totalNumberOfItems : activeCounters.length })
  }

  render() {
  
    console.log(2, 'render()')

    return (
      <React.Fragment>
        <NavBar numberOfItems={this.state.counters.filter(c => c.value > 0).length} />
        <Counters
        counters={this.state.counters}
        Reset={this.handleReset}
        Delete={this.handleDelete}
        Increment={this.handleIncrement}
        Decrement={this.handleDecrement} />
      </React.Fragment>
    );
  }
}

export default App;
