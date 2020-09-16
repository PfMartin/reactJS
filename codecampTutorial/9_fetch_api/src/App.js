import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      loading: false,
      character: {}
    };
    this.nextCharacter = this.nextCharacter.bind(this);
  }

  async componentDidMount() {
    await this.setState({
      loading: true
    })
    let res = await fetch(`https://swapi.dev/api/people/${this.state.id}`);
    let person = await res.json();
    this.setState({
      loading: false,
      character: person
    });
  }

  nextCharacter() {
    this.setState({
      id: 2
    })
    console.log(this.state.id)
  }

  render() {
    const text = this.state.loading ? 'Loading...' : this.state.character.name;
    return(
      <div>
        <h1>{text}</h1>
        <button onClick={this.nextCharacter} type='button'>Next</button>
      </div>
    )
  }
}

export default App