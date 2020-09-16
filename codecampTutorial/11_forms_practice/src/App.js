import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artNr: '',
      artName: '',
      manufacturer: '',
      artDescription: '',
      serialNr: '',
      supplierNr: '',
      price: '',
      artType: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {type, name, value} = event.target
    this.setState({
      [name]: value
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
              name="artNr"
              value={this.state.artNr}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Artikelbezeichnung:
            <input
              type="text"
              name="artName"
              value={this.state.artName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Hersteller:
            <input
              type="text"
              name="manufacturer"
              value={this.state.manufacturer}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Beschreibung:
            <textarea
              name="artDescription"
              value={this.state.artDescription}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Seriennummer:
            <input
              type="number"
              name="serialNr"
              value={this.state.serialNr}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Lieferantennummer:
            <input
              type="number"
              name="supplierNr"
              value={this.supplierNr}
              onChange={this.handleChange}
            />

          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              step="0.01"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Artikelart:
            <br />
            <input
              type="radio"
              name="artType"
              value="Zukaufartikel"
              checked={this.state.artType === "Zukaufartikel"}
              onChange={this.handleChange}
            /> Zukaufartikel
            <br />
            <input
              type="radio"
              name="artType"
              value="Lagerartikel"
              checked={this.state.artType === "Lagerartikel"}
              onChange={this.handleChange}
            /> Lagerartikel
            <br />
            <input
              type="radio"
              name="artType"
              value="Fertigungsartikel extern"
              checked={this.state.artType === "Fertigungsartikel extern"}
              onChange={this.handleChange}
            /> Fertigungsartikel extern
            <br />
            <input
              type="radio"
              name="artType"
              value="Dienstleistung"
              checked={this.state.artType === "Dienstleistung"}
              onChange={this.handleChange}
            /> Dienstleistung
            <br />
            <input
              type="radio"
              name="artType"
              value="Fertigung intern"
              checked={this.state.artType === "Fertigung intern"}
              onChange={this.handleChange}
            /> Fertigung intern
          </label>
        </form>
        <div className="evaluation">
          <h3>Artikel: {this.state.artNr}</h3>
          <h3>Artikelbezeichnung: {this.state.artName}</h3>
          <h3>Hersteller: {this.state.manufacturer}</h3>
          <h3>Beschreibung: {this.state.artDescription}</h3>
          <h3>Seriennummer: {this.state.serialNr}</h3>
          <h3>Lieferantennummer: {this.state.supplierNr}</h3>
          <h3>Stueckkosten: {this.state.price}</h3>
          <h3>Artikelart: {this.state.artType}</h3>
        </div>
      </div>
    )
  }
}

export default App;