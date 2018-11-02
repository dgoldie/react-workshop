# Class lessons

# Hello World
 React.createElement => JSX  (optional)
$0 in console
React Elements are just descriptions of UI, not the actual UI,
They call this the "Virtual DOM".
things like 'className' are actually referring to DOM.


Declarative vs Imperative Programming!!!


* Declarative programming... is a programming paradigm that expresses the logic of a computation without describing its control flow.


const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’);
btn.className = ‘btn red’;
btn.onclick = function(event) {
 if (this.classList.contains(‘red’)) {
   this.classList.remove(‘red’);
   this.classList.add(‘blue’);
 } else {
   this.classList.remove(‘blue’);
   this.classList.add(‘red’);
 }
};
container.appendChild(btn);



* Imperative programming... is a programming paradigm that uses statements that change a program’s state.


class Button extends React.Component{
  this.state = { color: 'red' }
  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }
  render() {
    return (<div>
      <button 
         className=`btn ${this.state.color}`
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}


Reference: https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2