import React from 'react';
fs = require('fs');

class OrderSummary extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.article);

  }
  render() {

    return(
      <div>
        <h3>Artikel: {this.props.article.id}</h3>
        <h3>Artikelbezeichnung: {this.props.article.artName}</h3>
        <h3>Hersteller: {this.props.article.manufacturer}</h3>
        <h3>Beschreibung: {this.props.article.artDescription}</h3>
        <h3>Seriennummer: {this.props.article.serialNr}</h3>
        <h3>Lieferantennummer: {this.props.article.supplierNr}</h3>
        <h3>Stueckkosten: {this.props.article.price}</h3>
        <h3>Artikelart: {this.props.article.artType}</h3>
      </div>
    )
  }
}

export default OrderSummary;