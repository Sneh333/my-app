//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Parent from "./Parent";

function App() {
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = array1.concat(array2);

  console.log(array3);
  const words = ["spray", "elite", "exuberant", "destruction", "present"];

  const result = words.filter((word) => word.length > 6);

  console.log(result);
  // Expected output: Array ["exuberant", "destruction", "present"]
  const [propsval, setPropsval] = useState(10);
  console.log(propsval);
  return (
    <>
      <p>Apps Props Value {propsval}</p>
      <Parent values={propsval} componentName="Calling from Apps" />
    </>
  );
}

export default App;
