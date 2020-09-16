import React from 'react';

class MainScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      this.props.unreadMsg.length !== 0 ? <h1>You have {this.props.unreadMsg.length} unread messages</h1> : <h1>Sorry but nobody messaged you</h1>
    )
  }
}

export default MainScreen;