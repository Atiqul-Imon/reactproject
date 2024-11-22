import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    return setCount(count + 1);
  }

  function reset() {
    return setCount(0);
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={increment}>Click here</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
