// == Import npm
import React from 'react';

// == Import Components
import Menu from 'src/components/Menu';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

// == Import styles
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Page />
    <Footer />
  </div>
);

// == Export
export default App;
