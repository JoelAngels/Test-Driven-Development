import React, { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  return (
    <>
      <h1 data-testid="header">My Counter</h1>
      <h2 data-testid="counter">{counterValue}</h2>
      <button data-testid="subtract-btn">-</button>
      <button data-testid="add-btn">+</button>
      <input type="number" data-testid="input" value={inputValue} />
    </>
  );
};

export default Counter;
