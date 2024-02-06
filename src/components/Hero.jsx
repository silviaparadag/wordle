import Keyboard from './Keyboard';
import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

//{`board__level${rowIndex}`}

const Hero = (props) => {
  const allRows = props.allRows.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className={`board__level${rowIndex + 1}`}>
        {row.map((letter, colIndex) => (
          <div
            key={colIndex}
            className={`word__letter ${
              rowIndex === props.currentRowIndex - 1
                ? props.letterStates[colIndex]
                : ''
            }`}
          >
            {letter === ' ' ? ' ' : <span>{letter}</span>}
          </div>
        ))}
      </div>
    );
  });
  return (
    <div className="hero">
      <h1 className="hero__subtitle">Let's play!</h1>
      <div className="board">{allRows}</div>
      <Keyboard
        handleClick={props.handleClick}
        handleEnter={props.handleEnter}
        usedLetters={props.usedLetters}
        row={props.row}
        handleDelete={props.handleDelete}
      />
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  words: PropTypes.array,
  handleClick: PropTypes.func,
  handleEnter: PropTypes.func,
  handleDelete: PropTypes.func,
  row: PropTypes.array,
  selectedLetter: PropTypes.string,
  letterStates: PropTypes.array,
  allRows: PropTypes.array,
  currentRowIndex: PropTypes.number,
  usedLetters: PropTypes.array,
};

/*   // const sixRows = Array(5)
  //   .fill()
  //   .map(() => eachRow); */
