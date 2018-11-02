import React from "react";
import ReactDOM from "react-dom";

////////////////////////////////////////////////////////////////////////////////
// React elements are plain JavaScript objects created with `createElement`
// const element = React.createElement("input");

// ReactDOM.render(element, document.getElementById("app"));

////////////////////////////////////////////////////////////////////////////////
// You can also pass in properties and child elements as extra arguments
// const element = React.createElement(
//   "select",
//   { value: "2" },
//   React.createElement("option", { value: "1" }, "one"),
//   React.createElement("option", { value: "2" }, "two"),
//   React.createElement("option", { value: "3" }, "three")
// );

// ReactDOM.render(element, document.getElementById("app"));

// [el]
// Output:
// <select value="2">
//  <option value="1">one</option>
//  <option value="2">two</option>
//  <option value="3">three</option>
// </select>

////////////////////////////////////////////////////////////////////////////////
// And build up more UI
// const element = React.createElement(
//   "div",
//   null,
//   React.createElement(
//     "h1",
//     { className: "hot" },
//     "These are just objects"
//   ),
//   React.createElement(
//     "select",
//     { value: "2" },
//     React.createElement("option", { value: "1" }, "one"),
//     React.createElement("option", { value: "2" }, "two"),
//     React.createElement("option", { value: "3" }, "three")
//   )
// );

// ReactDOM.render(element, document.getElementById("app"));

// [el]
// Output:
// <div>
//  <h1 class="hot">These are just objects</h1>
//  <select value="2">
//    <option value="1">one</option>
//    <option value="2">two</option>
//    <option value="3">three</option>
//  </select>
// </div>

////////////////////////////////////////////////////////////////////////////////
// Lets look at one of them in the console
// Don't get upset, `className` is a DOM thing
//console.log(element)

////////////////////////////////////////////////////////////////////////////////
// We can pass in functions as event handlers
// function handleClick() {
//   alert("clicked some more!");
// }

// const element = React.createElement(
//   "button",
//   { onClick: handleClick },
//   "alert!"
// );

// ReactDOM.render(element, document.getElementById("app"));

// [el]
// Output:
// <button onClick="handleClick()">alert!</button>
//



////////////////////////////////////////////////////////////////////////////////
// No way to inject behavior into a template string w/out using globals, so
// we need to add it imperatively afterwards.

////////////////////////////////////////////////////////////////////////////////
// Now let's put a number by each person's name. First, in React:
// const contacts = [
//   { name: "Michael Jackson" },
//   { name: "Taylor Swift" },
//   { name: "Bruce Lee" }
// ];

// const element = React.createElement(
//   "ul",
//   null,
//   contacts.map((contact, index) =>
//     React.createElement(
//       "li",
//       { onClick: () => alert(contact.name) },
//       index + 1 + " " + contact.name
//     )
//   )
// );

// ReactDOM.render(element, document.getElementById("app"));


//[el]
// React DOM compares the element and the children to the previous one. It only updates
// the part that is needed.
//
// <div>
//  <h1>Hello World</h1>
//  <p>This is a description</p>
// </div>

////////////////////////////////////////////////////////////////////////////////
// Because React is generally just a bunch of objects, you don't have to ask
// React how to solve a problem in your app, you can use everything you know
// about programming already.

////////////////////////////////////////////////////////////////////////////////
// - Always re-render
// - Virtual DOM makes it efficient
