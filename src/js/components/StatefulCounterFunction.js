import React, { useState } from 'react';
import { Fragment } from 'react';

const StatefulCounterFunction = () => {

  const [count,setState] = useState(0);

  const style = { display: 'inline-block', marginRight: '10px' };

  return (
    <Fragment>
      <div>
        <p style={style}>Example of stateful functional component using the useState hook:</p>
        <h3 style={style}>{count}</h3>
        <button  style={style} onClick={() => setState(count + 1)}>Increase</button>
      </div>
    </Fragment>
  );
}
 
export default StatefulCounterFunction;