import { useState } from "react";
import React from "react";

const IncrementDecement = () => {
  const [count, setCount] = useState(5);
  const [disname, setdisName] = useState("Snehdeep");
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleName = () => setdisName("Sneh");

  return (
    <>
      <div> Hello increment ! </div>
      <div>Count {count}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <div>
          <textarea name="" id="" value={disname}>
            {disname}
          </textarea>
          <button onClick={handleName}>setName</button>
        </div>
      </div>
    </>
  );
};
export default IncrementDecement;
