import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const DisplayInfo = ({ count }) => {
  return <p>Current count: {count}</p>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <Counter count={count} increment={increment} />
      <DisplayInfo count={count} />
    </div>
  );
};

export default ParentComponent;
