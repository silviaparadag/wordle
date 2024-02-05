import React from 'react';
import { useEffect } from 'react';
import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

const Keyboard = (props) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && props.usedLetters.length === 5) {
        event.preventDefault();
        formRef.current.dispatchEvent(
          new Event('submit', { cancelable: true })
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [props.usedLetters]);
  const formRef = React.useRef(null);

  return (
    <form
      ref={formRef}
      className="keyboard"
      type="submit"
      onSubmit={props.handleEnter}
      onKeyDown={props.handleEnter}
    >
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
        <button type="submit" className="keyboard__key">
          Enter
        </button>
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
    </form>
  );
};

export default Keyboard;

Keyboard.propTypes = {
  handleClick: PropTypes.func,
  handleEnter: PropTypes.func,
  usedLetters: PropTypes.array,
  row: PropTypes.array,
};
