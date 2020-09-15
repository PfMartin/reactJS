import React from 'react';

import Header from './components/Header.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';

// Function based component
// const App = () => {
//   return(
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   )
// }

// Class based component
class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default App