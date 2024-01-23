import Keyboard from './Keyboard';
import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

//{`board__level${rowIndex}`}

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

  const sixRows = props.allRows.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className="board">
        {Array(5)
          .fill()
          .map(() => eachRow)}
      </div>
    );
  });
  // const sixRows = Array(5)
  //   .fill()
  //   .map(() => eachRow);

  return (
    <div className="hero">
      <h1 className="hero__subtitle">Let's play!</h1>
      {props.allRows}
      {/* <div className="board">
        <div className="board__level6">
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
        </div>
        {eachRow}
      </div> */}
      {sixRows}
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
  // proposedWord: PropTypes.array,
  handleClick: PropTypes.func,
  handleEnter: PropTypes.func,
  row: PropTypes.array,
  selectedLetter: PropTypes.string,
  letterStates: PropTypes.array,
  allRows: PropTypes.array,
};

/*  <div className="board__level6">
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
          <div className="word__letter"> </div>
        </div>
        <div className="board__level6">{props.proposedWord}</div> */
