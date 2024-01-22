// import React from 'react';
import Keyboard from './Keyboard';
import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

const Hero = (props) => {
  return (
    <div className="hero">
      <h1 className="hero__subtitle">Let's play!</h1>

      <div className="board">
        <div className="board__level1">
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
        </div>
        <div className="board__level2">{props.proposedLetter}</div>
        <div className="board__level3">
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
        </div>
        <div className="board__level4">
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
        </div>
        <div className="board__level5">
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
        </div>
        <div className="board__level6">
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
        </div>
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
  proposedLetter: PropTypes.array,
  handleClick: PropTypes.func,
  handleEnter: PropTypes.func,
};

/* 
      <div className="word">
        <ul className="word__level1">{props.proposedLetter}</ul>
      </div>

      */
