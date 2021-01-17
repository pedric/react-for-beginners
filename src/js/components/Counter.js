import React, { Component } from "react";

class Counter extends Component {

  constructor(props){
    super()
  }

  formatItems = () => {
    return this.props.value <= 0 ? 'zero' : this.props.value ;
  }

  render() {

    const counterStyle = {
      margin: '5px 10px 5px 0',
      background: '#26c71c',
      color: '#333',
      padding: '.5em 1em',
      borderRadius: '20px'
    };

    return (
      <div className={'counter'} style={{marginBottom: '10px'}}>
        <span style={counterStyle}>{this.formatItems()}</span>
        <button className={'btn'} onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
        <button className={'btn btn--error'} onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
      );
  }
}


export default Counter