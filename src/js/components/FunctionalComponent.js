import React from "react";
import ReactDOM from "react-dom";

export default function FunctionalComponent(props) {

  const style = { display: 'inline-block', background: props.color, padding: '8px' };
  return (<div className={'bg-gray-100'}>
            <h3>Hi from Example component</h3>
            <p><span>Description:</span> <span>{props.description}</span></p>
          </div>
          );
}
