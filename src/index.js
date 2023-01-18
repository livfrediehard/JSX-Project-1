import React from "react";
import ReactDOM from "react-dom";

const fname = "Brian";
const lname = "Palmer";
const number = 23;

ReactDOM.render(
  <div>
    <h1>
      This is a variable test, thank you {fname} {lname}.
    </h1>
    <p>Lucky number is Jordan's jersey number #{number}.</p>
  </div>,
  document.getElementById("root")
);
