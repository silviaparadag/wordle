import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Hero';
import Footer from './components/Footer';

import './styles/App.scss';

function App() {
  return (
    <>
      {' '}
      <div className="App">
        <Header />
        <main className="main">
          <Main />
        </main>
        <Footer />
      </div>{' '}
    </>
  );
}

export default App;
