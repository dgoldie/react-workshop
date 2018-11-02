import React from "react";
import ReactDOM from "react-dom";

// Hello Bay Area React
function AppReact() {
  return React.createElement(
    'div',
    null,
    'Hello World!'
  );
}














































// Hello Bay Area JSX
function AppJSX() {
  return <div>Hello World!</div>;
}

ReactDOM.render(<AppJSX />, document.getElementById("app"));

