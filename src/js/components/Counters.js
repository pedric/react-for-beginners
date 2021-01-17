import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {

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

  render(){  

    const style = {color: 'red' }

    const counters = this.state.counters.map(counter => 
      <Counter 
      key={counter.id} 
      value={counter.value} 
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}
      counter={counter} 
      selected />
    )

    return (
    <div className={'bg-gray-100'} style={style}>
      <button className={'btn'} onClick={this.handleReset}>Reset state</button>
      { counters }
    </div>
    );
  }
}


export default Counters