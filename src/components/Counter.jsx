import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click here</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}
