import Keyboard from './Keyboard';
import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const eachRow = props.row.map((columns, rowIndex) => {
    return (
      <div key={rowIndex} className="board__level1">
        {columns.map((letter, colIndex) => (
          <div
            key={colIndex}
            className={`word__letter ${props.letterStates[colIndex]}`}
          >
            {letter === ' ' ? (
              ' '
            ) : (
              <span className={`letter-${letter}`}>{letter}</span>
            )}
          </div>
        ))}
      </div>
    );
  });
  return (
    <div className="hero">
      <h1 className="hero__subtitle">Let's play!</h1>

      <div className="board">
        {eachRow}
        <div className="board__level6">{props.proposedWord}</div>
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
  letterStates: PropTypes.array,
};

/*  */
