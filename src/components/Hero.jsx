// import React from 'react';
import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

const Hero = (props) => {
  console.log(props.words);
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
        <ul className="word__level3">
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
          <li className="word__letter">_</li>
        </ul>
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

      {/* <div className="keyboard">
        <div className="keyboard__row">
          <button className="keyboard__key">q</button>
          <button className="keyboard__key">w</button>
          <button className="keyboard__key">e</button>
          <button className="keyboard__key">r</button>
          <button className="keyboard__key">t</button>
          <button className="keyboard__key">y</button>
          <button className="keyboard__key">u</button>
          <button className="keyboard__key">i</button>
          <button className="keyboard__key">o</button>
          <button className="keyboard__key">p</button>
        </div>
        <div className="keyboard__row">
          <button className="keyboard__key">a</button>
          <button className="keyboard__key">s</button>
          <button className="keyboard__key">d</button>
          <button className="keyboard__key">f</button>
          <button className="keyboard__key">g</button>
          <button className="keyboard__key">h</button>
          <button className="keyboard__key">j</button>
          <button className="keyboard__key">k</button>
          <button className="keyboard__key">l</button>
        </div>
        <div className="keyboard__row">
          <button className="keyboard__key">Enter</button>
          <button className="keyboard__key">z</button>
          <button className="keyboard__key">x</button>
          <button className="keyboard__key">c</button>
          <button className="keyboard__key">v</button>
          <button className="keyboard__key">b</button>
          <button className="keyboard__key">n</button>
          <button className="keyboard__key">m</button>
          <button className="keyboard__key">Del</button>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  words: PropTypes.array,
  renderLetters: PropTypes.func,
};