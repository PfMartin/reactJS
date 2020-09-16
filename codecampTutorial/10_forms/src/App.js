import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artikelnummer: '',
      bestellnummer: '',
      bestelldatum: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      //Select the target in which the event was fired and take the value
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form>
          <label>
            Artikelnummer:
            <input
              type="number"
              value={this.state.artikelnummer}
              name="artikelnummer"
              placeholder="Artikelnummer"
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Bestellnummer:
            <input
              type="number"
              value={this.state.bestellnummer}
              name="bestellnummer"
              placeholder="Bestellnummer"
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Bestellnummer:
            <input
              type="date"
              value={this.state.bestelldatum}
              name="bestelldatum"
              placeholder="Bestelldatum"
              onChange={this.handleChange}
              />
          </label>
        </form>

        <br></br>
        <p>Warenwirtschaftsnummer: {this.state.artikelnummer}</p>
        <p>Bestellung: {this.state.bestellnummer}</p>
        <p>Bestelldatum: {this.state.bestelldatum}</p>
      </div>
    )
  }
}

export default App;