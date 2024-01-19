// import React from 'react';
import Keyboard from './Keyboard';
import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

const Hero = (props) => {
  return (
    <div className="hero">
      <h1 className="hero__subtitle">Let's play!</h1>

      <div className="word">
        <ul className="word__level1">{props.proposedWord}</ul>
      </div>

      <div className="board">
        <div className="board__level">
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
        </div>
        <div className="board__level">
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
        </div>
        <div className="board__level">
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
        </div>
        <div className="board__level">
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
        </div>
        <div className="board__level">
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
        </div>
        <div className="board__level">
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
          <div className="word__letter">_</div>
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
  proposedWord: PropTypes.array,
  handleClick: PropTypes.func,
  handleEnter: PropTypes.func,
};
