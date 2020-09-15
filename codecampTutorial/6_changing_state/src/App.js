import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    // Everytime we create a method that uses setState() we need to bind the method to the class
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Button got clicked');
    // Either set the state to a new object literal
    // Or set a new state dependent on the previous state with a function
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {


    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}className="btn">Change!</button>
      </div>
    )
  }
}

export default App