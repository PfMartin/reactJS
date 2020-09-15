import React from 'react';

import Footer from './Footer.js';
import MainContent from './MainContent.js';
import Navbar from './Navbar.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App