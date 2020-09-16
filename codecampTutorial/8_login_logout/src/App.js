import React from 'react';

import LogInOut from './components/LogInOut';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }

    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }
  render() {
    return(
      <div>
        { this.state.isLoggedIn ? <h1>You're logged in</h1> : <h1>You're logged out</h1> }
        <LogInOut handler={this.handler} logStatus={this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default App