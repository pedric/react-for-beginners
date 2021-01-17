import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {

  constructor(props){
    super()
  }

  render(){

    const { counters, Delete, Increment, Reset } = this.props;

    const countersMapped = counters.map(counter => 
      <Counter 
      key={counter.id} 
      value={counter.value} 
      onDelete={Delete}
      onIncrement={Increment}
      counter={counter} 
      selected />
    )

    return (
    <div>
      <button className={'btn'} onClick={Reset}>Reset state</button>
      { countersMapped }
    </div>
    );
  }
}


export default Counters