import React from 'react';

class LogInOut extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.logStatus)
    return(
      <div>
        <button onClick={this.props.handler} type="button">
        {this.props.logStatus ? 'Log Out' : 'Log In'}</button>
      </div>
    )
  }
}

export default LogInOut