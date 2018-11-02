import React from "react";
import ReactDOM from "react-dom";
// import ReactClass from 'create-react-class';

// Hello Bay Area React
function AppReact() {
  return React.createElement(
    'div',
    null,
    'Hello Bay Area!'
  );
  // return <div>Hello Bay Area!</div>;
}

// Hello Bay Area JSX
function AppJSX() {
  return <div>Hello Bay Area!</div>;
}

ReactDOM.render(<AppJSX />, document.getElementById("app"));

































// Hello World JSX  with React.createClass


const Klass = ReactClass({
  render() {
   return (<div>Hello San Francisco!</div>); 
  }
});
//ReactDOM.render(<Klass />, document.getElementById("app"));
