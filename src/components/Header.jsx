// import React from 'react';
import SpLogo from '../assets/logo-sp-black.svg';
import '../styles/layout/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <a
        href="https://silviaparadag.github.io/portfolio/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={SpLogo} className="header__logo" alt="Silvia Parada logo" />
      </a>
      <div className="header__right">
        <h1 className="header__right--title">Wordle</h1>
      </div>
    </header>
  );
};

export default Header;
