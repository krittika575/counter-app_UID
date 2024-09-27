// src/App.js

import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  // Initialize the state with useState
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset the count
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app-container">
      <h1 className="title">Counter Application</h1>
      <h2 className="count">{count}</h2>
      <div className="button-container">
        <button className="button increment" onClick={increment}>
          Increment
        </button>
        <button className="button decrement" onClick={decrement}>
          Decrement
        </button>
        <button className="button reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
