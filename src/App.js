import React, { Fragment } from 'react';

// Import components
import Navigation from './components/Navigation';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <Portfolio />
      <About />
      <Footer />
    </Fragment>
  );
};

export default App;
