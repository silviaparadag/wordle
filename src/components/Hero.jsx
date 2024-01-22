// import React from 'react';
import Keyboard from './Keyboard';
import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const noLetter = ' ';
  return (
    <div className="hero">
      <h1 className="hero__subtitle">Let's play!</h1>

      <div className="board">
        {props.row.map((columns, rowIndex) => (
          <div key={rowIndex} className="board__level1">
            {columns.map((letter) => letter || noLetter)}
          </div>
        ))}
        {/* {`board__level${rowIndex}`} */}
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
  proposedWord: PropTypes.array,
  handleClick: PropTypes.func,
  handleEnter: PropTypes.func,
  row: PropTypes.array,
  selectedLetter: PropTypes.string,
};

/* 
      <div className="word">
        <ul className="word__level1">{props.proposedWord}</ul>
      </div>

      */
