EXAMPLE:



import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

let isOpen = false;

function handleClick() {
  isOpen = !isOpen;
  updateThePage();
}

function ContentToggle() {
  let summaryClassName = "content-toggle-summary";

  if (isOpen) {
    summaryClassName += " content-toggle-summary-open";
  }

  return (
    <div className="content-toggle">
      <button onClick={handleClick} className={summaryClassName}>
        Tacos
      </button>
      {isOpen && (
        <div className="content-toggle-details">
          <p>
            A taco is a traditional Mexican dish composed of a corn or
            wheat tortilla folded or rolled around a filling.
          </p>
        </div>
      )}
    </div>
  );
}

function updateThePage() {
  ReactDOM.render(<ContentToggle />, document.getElementById("app"));
}

updateThePage();






React:
Component-Based

class MyKlass extends React.Component { ... } 



// Hello World JSX with React.createClass

import React from "react";
import ReactDOM from "react-dom";
import ReactClass from 'create-react-class';

const Klass = ReactClass({
  render() {
   return (<div>Hello San Francisco!</div>); 
  }
});
//ReactDOM.render(<Klass />, document.getElementById("app"));





Build encapsulated components that manage their own state, so




* A Stateful Component
