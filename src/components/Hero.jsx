import React from 'react';
import '../styles/layout/Main.scss';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">Let's play!</h1>

      <div className="word">
        <div className="word__level1">
          <div className="word__column">A</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
        </div>
        <div className="word__level2">
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
        </div>
        <div className="word__level3">
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
        </div>
        <div className="word__level4">
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
        </div>
        <div className="word__level5">
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
        </div>
        <div className="word__level6">
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
          <div className="word__column">_</div>
        </div>
      </div>

      <div className="keyboard">
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
          <div className="keyboard__key">Enter</div>
          <button className="keyboard__key">z</button>
          <button className="keyboard__key">x</button>
          <button className="keyboard__key">c</button>
          <button className="keyboard__key">v</button>
          <button className="keyboard__key">b</button>
          <button className="keyboard__key">n</button>
          <button className="keyboard__key">m</button>
          <div className="keyboard__key">Del</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
