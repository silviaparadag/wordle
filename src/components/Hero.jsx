// import React from 'react';
import Keyboard from './Keyboard';
import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

const Hero = (props) => {
  return (
    <div className="hero">
      <h1 className="hero__subtitle">Let's play!</h1>

      <div className="word">
        <ul className="word__level1">
          <li className="word__letter correct">B</li>
          <li className="word__letter wrong">L</li>
          <li className="word__letter correct">O</li>
          <li className="word__letter wrong">N</li>
          <li className="word__letter correct">D</li>
        </ul>
        <ul className="word__level2">
          <li className="word__letter correct">B</li>
          <li className="word__letter correct">R</li>
          <li className="word__letter correct">O</li>
          <li className="word__letter wrong">w</li>
          <li className="word__letter correct">D</li>
        </ul>
        <ul className="word__level3">{props.proposedWord}</ul>
        <ul className="word__level4">
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
        </ul>
        <ul className="word__level5">
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
        </ul>
        <ul className="word__level6">
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
        </ul>
      </div>
      <Keyboard
        handleClick={props.handleClick}
        handleEnter={props.handleEnter}
      />
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  words: PropTypes.array,
  proposedWord: PropTypes.array,
  handleClick: PropTypes.func,
  handleEnter: PropTypes.func,
};
