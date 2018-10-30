// Hello World JSX 

import React from "react";
import ReactDOM from "react-dom";
import ReactClass from 'create-react-class';

const Klass = ReactClass({
  render() {
   return (<div>Hello San Francisco!</div>); 
  }
});

// function App() {
  // return React.createElement('div', null, 'Hello San Francisco!');
  // return <div>Hello SF!</div>; 
// }

ReactDOM.render(<Klass />, document.getElementById("app"));
