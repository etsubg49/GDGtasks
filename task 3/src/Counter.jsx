import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-display">Counter: {count}</h1>
      <div>
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement}>Decrement</button>
        <button className="button reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

