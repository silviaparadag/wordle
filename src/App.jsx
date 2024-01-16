import { useState } from 'react';
import SpLogo from './assets/logo-sp-black.svg';

import './styles/App.scss';

function App() {
  return (
    <>
      <div>
        <a
          href="https://silviaparadag.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={SpLogo} className="logo" alt="Silvia Parada logo" />
        </a>
      </div>
      <h1 className="header__title">Wordle</h1>
      <div className="card"></div>
    </>
  );
}

export default App;
