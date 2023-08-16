import React from 'react';

import { About, Footer, Header, Skills, Profile, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Profile />
    <Footer />
  </div>
);

export default App;
