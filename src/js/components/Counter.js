import React, { Component } from "react";

class Counter extends Component {

  constructor(props){
    super(props)
  }

  componentDidUpdate(){
    console.log('Counter - componentDidUpdate()')
  }

  componentWillUnmount(){
    console.log('Counter - componentWillUnmount()')
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
        <button className={'btn'} onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
        <button className={this.props.counter.value <= 0 ? 'btn disabled' : 'btn'} onClick={() => this.props.onDecrement(this.props.counter)}>-</button>
        <button className={'btn btn--error'} onClick={() => this.props.onDelete(this.props.counter.id)}>x</button>
      </div>
      );
  }
}


export default Counter