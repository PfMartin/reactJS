import React from 'react';

import ArticleSummary from './ArticleSummary.js'

class ArticleForm extends React.Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    this.setState({
      submitted: true
    })
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return(
      <div>
        {this.state.submitted ? <ArticleSummary article={this.props.article}/> :
          <form>
            <label>
              Artikelnummer:
              <input
                type="number"
                name="id"
                value={this.props.article.id}
                onChange={this.props.handleChange}
              />
            </label>
            <br />
            <label>
              Artikelbezeichnung:
              <input
                type="text"
                name="artName"
                value={this.props.article.artName}
                onChange={this.props.handleChange}
              />
            </label>
            <br />
            <label>
              Hersteller:
              <input
                type="text"
                name="manufacturer"
                value={this.props.article.manufacturer}
                onChange={this.props.handleChange}
              />
            </label>
            <br />
            <label>
              Beschreibung:
              <textarea
                name="artDescription"
                value={this.props.article.artDescription}
                onChange={this.props.handleChange}
              />
            </label>
            <br />
            <label>
              Seriennummer:
              <input
                type="number"
                name="serialNr"
                value={this.props.article.serialNr}
                onChange={this.props.handleChange}
              />
            </label>
            <br />
            <label>
              Lieferantennummer:
              <input
                type="number"
                name="supplierNr"
                value={this.supplierNr}
                onChange={this.props.handleChange}
              />

            </label>
            <br />
            <label>
              Price:
              <input
                type="number"
                step="0.01"
                name="price"
                value={this.props.article.price}
                onChange={this.props.handleChange}
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
                checked={this.props.article.artType === "Zukaufartikel"}
                onChange={this.props.handleChange}
              /> Zukaufartikel
              <br />
              <input
                type="radio"
                name="artType"
                value="Lagerartikel"
                checked={this.props.article.artType === "Lagerartikel"}
                onChange={this.props.handleChange}
              /> Lagerartikel
              <br />
              <input
                type="radio"
                name="artType"
                value="Fertigungsartikel extern"
                checked={this.props.article.artType === "Fertigungsartikel extern"}
                onChange={this.props.handleChange}
              /> Fertigungsartikel extern
              <br />
              <input
                type="radio"
                name="artType"
                value="Dienstleistung"
                checked={this.props.article.artType === "Dienstleistung"}
                onChange={this.props.handleChange}
              /> Dienstleistung
              <br />
              <input
                type="radio"
                name="artType"
                value="Fertigung intern"
                checked={this.props.article.artType === "Fertigung intern"}
                onChange={this.props.handleChange}
              /> Fertigung intern
            </label>
            <button onClick={this.onSubmit}>Submit</button>
          </form>
        }
      </div>
    )
  }
}

export default ArticleForm;