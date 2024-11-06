import React from "react";
import IncrementDecement from "./IncrementDecement";
import BasicTextFields from "./BasicTextFields";

interface ParentProps {
  values: number;
  componentName: string;
}

const Parent = (props: ParentProps) => {
  console.log("Props", props, props.values);
  return (
    <div>
      <p>Parent Props Value {props.values}</p>
      <p>Parent Component Name Value {props.componentName}</p>
      <IncrementDecement />
      <BasicTextFields />
    </div>
  );
};

export default Parent;
