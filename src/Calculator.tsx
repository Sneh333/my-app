import React from "react";
import { Button, TextField } from "@mui/material";
import { commontypes } from "./interfaces";
import "./commoncss.css";
import { useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [addition, setAddition] = useState(0);

  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [subtract, setSubtract] = useState(0);

  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [multiply, setMultiply] = useState(0);

  const [number7, setNumber7] = useState(0);
  const [number8, setNumber8] = useState(0);
  const [division, setDivision] = useState(0);

  const add_numbers = () => {
    setAddition(number1 + number2);
  };
  const subtract_numbers = () => {
    setSubtract(number3 - number4);
  };
  const multiply_numbers = () => {
    setMultiply(number5 * number6);
  };
  const divide_numbers = () => {
    setDivision(number7 / number8);
  };
  const changeNumber1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber1(Number(event.target.value));
  };

  const changeNumber2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber2(Number(event.target.value));
  };
  const changeNumber3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber3(Number(event.target.value));
  };
  const changeNumber4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber4(Number(event.target.value));
  };
  const changeNumber5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber5(Number(event.target.value));
  };
  const changeNumber6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber6(Number(event.target.value));
  };
  const changeNumber7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber7(Number(event.target.value));
  };
  const changeNumber8 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber8(Number(event.target.value));
  };

  return (
    <div className="main_div1">
      <div className="head_lbl">Addition of two numbers</div>
      <div className="txtfld">
        <TextField id="number1" label="Number 1" onChange={changeNumber1} />
        <TextField id="number2" label="Number 2" onChange={changeNumber2} />
        <div>
          <Button
            sx={{
              backgroundColor: "#007bff", // Sets the background color to blue
              color: "white", // Sets the text color to white
              "&:hover": {
                // Adds hover effect
                backgroundColor: "darkblue",
              },
            }}
            className="btn"
            onClick={add_numbers}
          >
            + Addition
          </Button>
        </div>
        <div>
          <TextField
            id="add_ans"
            label="Addition answer"
            value={addition}
          ></TextField>
        </div>
      </div>

      <div className="head_lbl">Substraction between two numbers</div>
      <div className="txtfld">
        <TextField id="number3" label="Number 1" onChange={changeNumber3} />
        <TextField id="number4" label="Number 2" onChange={changeNumber4} />
        <div>
          <Button
            sx={{
              backgroundColor: "#007bff", // Sets the background color to blue
              color: "white", // Sets the text color to white
              "&:hover": {
                // Adds hover effect
                backgroundColor: "darkblue",
              },
            }}
            className="btn"
            onClick={subtract_numbers}
          >
            - Substraction
          </Button>
        </div>
        <div>
          <TextField
            id="sub_ans"
            label="Substraction answer"
            value={subtract}
          ></TextField>
        </div>
      </div>

      <div className="head_lbl">Multiplication of two numbers</div>
      <div className="txtfld">
        <TextField id="number5" label="Number 1" onChange={changeNumber5} />
        <TextField id="number6" label="Number 2" onChange={changeNumber6} />
        <div>
          <Button
            sx={{
              backgroundColor: "#007bff", // Sets the background color to blue
              color: "white", // Sets the text color to white
              "&:hover": {
                // Adds hover effect
                backgroundColor: "darkblue",
              },
            }}
            className="btn"
            onClick={multiply_numbers}
          >
            x Multiplication
          </Button>
        </div>
        <div>
          <TextField
            id="mult_ans"
            label="Multiplication answer"
            value={multiply}
          ></TextField>
        </div>
      </div>

      <div className="head_lbl">Division of two numbers</div>
      <div className="txtfld">
        <TextField id="number7" label="Number 1" onChange={changeNumber7} />
        <TextField id="number8" label="Number 2" onChange={changeNumber8} />
        <div>
          <Button
            sx={{
              backgroundColor: "#007bff", // Sets the background color to blue
              color: "white", // Sets the text color to white
              "&:hover": {
                // Adds hover effect
                backgroundColor: "darkblue",
              },
            }}
            className="btn"
            onClick={divide_numbers}
          >
            / Division
          </Button>
        </div>
        <div>
          <TextField
            id="div_ans"
            label="Division answer"
            value={division}
          ></TextField>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
