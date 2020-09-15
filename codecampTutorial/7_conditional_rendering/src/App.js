import React from 'react';

import MainScreen from './components/MainScreen.js';
import LoadingScreen from './components/LoadingScreen.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      unreadMsg: [
        "Hello my friend, how are you?",
        "Hey cutie, what do you want to eat for dinner?"
      ]
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500);
  }

  render() {
    return(
      <div>
        { this.state.isLoading ? <LoadingScreen /> : <MainScreen unreadMsg={this.state.unreadMsg}/> }
      </div>
    )
  }
}

export default App