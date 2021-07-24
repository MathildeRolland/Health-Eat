// == Import npm
import React from 'react';

// == Import Components
import Menu from 'src/components/Menu';
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

// == Import styles
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Nav />
    <div className="app__page--desktop">
      <Page />
      <Footer />
    </div>
  </div>
);

// == Export
export default App;
