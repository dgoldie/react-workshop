////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - change the contents of the render function and save the file
// - see the updates automatically in your browser without refreshing!
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    inputValue: "wine"
  };

  // Access the value using event.target.
  handleChange = event => {
    console.log(event.target.value);
  };

  // use a ref.
  handleRefChange = () => {
    console.log(this.input.value);
  };

  // Input value in state.
  // When it's controlled, we can setState elsewhere and it stays in sync.
  handleStateChange = () => {
    this.setState({ inputValue: this.inputState.value });
  }

  // Handle no state form.
  // Transactional forms, don't need anything in state, just use
  // `defaultValue` and `onSubmit`
  handleNoStateSubmit = event => {
   event.preventDefault();
   const values = serializeForm(event.target, { hash: true });
   console.log(values);
  };

  render() {
    return (
      <div>
        <h1>Forms</h1>
        <form>
          <input
            type="text"
            defaultValue="cupcakes"
          />

          <br/><br/>
          <input
            type="text"
            defaultValue="chocolates"
            onChange={this.handleChange}
          />

          <br/><br/>
          <input
            type="text"
            onChange={this.handleRefChange}
            ref={node => (this.input = node)}
          />

          <br/><br/>
          <input
            type="text"
            ref={node => (this.inputState = node)}
            value={this.state.inputValue}
            onChange={this.handleStateChange}
          />
        </form>

        <form onSubmit={this.handleNoStateSubmit}>
           <p>
             <label>
               First Name:{" "}
               <input
                 name="firstName"
                 defaultValue="Michael"
                 type="text"
               />
             </label>
           </p>
           <p>
             <label>
             Last Name:{" "}
               <input
                 name="lastName"
               defaultValue="Jackson"
                 type="text"
             />
             </label>
           </p>
           <p>
             <button type="submit">Save</button>
           </p>
         </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
