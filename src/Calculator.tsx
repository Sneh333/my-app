import React from "react";
import { Button, TextField } from "@mui/material";
import { commontypes } from "./interfaces";
import "./commoncss.css";
import { useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [addition, setAddition] = useState(0);

  const add_numbers = () => {
    setAddition(number1 + number2);
  };
  const changeNumber1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber1(Number(event.target.value));
  };

  const changeNumber2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber2(Number(event.target.value));
  };

  return (
    <div className="main_div1">
      <div className="head_lbl">Addition of two numbers</div>
      <div className="txtfld">
        <TextField
          id="number1"
          label="Number 1"
          value={number1}
          onChange={changeNumber1}
        />
        <TextField
          id="number2"
          label="Number 2"
          value={number2}
          onChange={changeNumber2}
        />
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
        <TextField id="number3" label="Number 1" />
        <TextField id="number4" label="Number 2" />
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
          >
            {" "}
            - Substraction
          </Button>
        </div>
        <div>
          <TextField id="sub_ans" label="Substraction answer"></TextField>
        </div>
      </div>

      <div className="head_lbl">Multiplication of two numbers</div>
      <div className="txtfld">
        <TextField id="number5" label="Number 1" />
        <TextField id="number6" label="Number 2" />
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
          >
            {" "}
            x Multiplication
          </Button>
        </div>
        <div>
          <TextField id="mult_ans" label="Multiplication answer"></TextField>
        </div>
      </div>

      <div className="head_lbl">Division of two numbers</div>
      <div className="txtfld">
        <TextField id="number7" label="Number 1" />
        <TextField id="number8" label="Number 2" />
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
          >
            {" "}
            / Division
          </Button>
        </div>
        <div>
          <TextField id="div_ans" label="Division answer"></TextField>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
