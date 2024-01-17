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
        <ul className="word__level3">{props.proposedWord}</ul>
        <ul className="word__level4"></ul>
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
      <div className="keyboard">
        <div className="keyboard__row">
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'q'}
          >
            q
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'w'}
          >
            w
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'e'}
          >
            e
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'r'}
          >
            r
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'t'}
          >
            t
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'y'}
          >
            y
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'u'}
          >
            u
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'i'}
          >
            i
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'o'}
          >
            o
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'p'}
          >
            p
          </button>
        </div>
        <div className="keyboard__row">
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'a'}
          >
            a
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'s'}
          >
            s
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'d'}
          >
            d
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'f'}
          >
            f
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'g'}
          >
            g
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'h'}
          >
            h
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'j'}
          >
            j
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'k'}
          >
            k
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'l'}
          >
            l
          </button>
        </div>
        <div className="keyboard__row">
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'q'}
          >
            Enter
          </button>
          {/* ATTENTION: Enter should be onSummit */}
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'z'}
          >
            z
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'x'}
          >
            x
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'c'}
          >
            c
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'v'}
          >
            v
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'b'}
          >
            b
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'n'}
          >
            n
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'m'}
          >
            m
          </button>
          <button
            onClick={props.handleClick}
            className="keyboard__key"
            value={'Del'}
          >
            Del
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  words: PropTypes.array,
  proposedWord: PropTypes.array,
  handleClick: PropTypes.func,
};
