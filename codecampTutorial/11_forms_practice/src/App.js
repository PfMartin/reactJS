import React from 'react';

import ArticleForm from './components/ArticleForm.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      artName: '',
      manufacturer: '',
      artDescription: '',
      serialNr: '',
      supplierNr: '',
      price: '',
      artType: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <ArticleForm handleChange={this.handleChange} article={this.state}/>
    )
  }
}

export default App;