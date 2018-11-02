import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement("input");
// ReactDOM.render(element, document.getElementById("app"));


const element = React.createElement(
   "select",
   { value: "2" },
   React.createElement("option", { value: "1" }, "one"),
   React.createElement("option", { value: "2" }, "two"),
   React.createElement("option", { value: "3" }, "three")
);

ReactDOM.render(element, document.getElementById("app"));