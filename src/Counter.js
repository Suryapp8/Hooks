import { useState, useEffect } from "react";

// Use React Hooks for incrementing, decrementing nd resetting the value of the counter.
// Also, print the value of count on the console by using useEffect hook.

function Counter() {
  const [increase, useIncrease] = useState(0);

  const increaseNumber = () => {
    useIncrease(increase + 1);
  };

  const decreaseNumber = () => {
    useIncrease(increase - 1);
  };

  const resetFunction = () => {
    useIncrease(increase == 0);
  };

  useEffect(() => {
    console.log(increase);
  });

  return (
    <>
      <p>Count value is: {increase} </p>
      <button onClick={resetFunction}>Reset</button>
      <button onClick={increaseNumber}>Plus (+)</button>
      <button onClick={decreaseNumber}>Minus (-)</button>
    </>
  );
}

export default Counter;
