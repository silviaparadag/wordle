import Keyboard from './Keyboard';
import '../styles/layout/Main.scss';
import PropTypes from 'prop-types';

//{`board__level${rowIndex}`}

const Hero = (props) => {
  const allRows = props.allRows.map(() => {
    const eachRow = props.row.map((columns, rowIndex) => {
      return (
        <div key={rowIndex} className="board__level">
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

    return eachRow;
  });

  return (
    <div className="hero">
      <h1 className="hero__subtitle">Let's play!</h1>
      <div className="board">{allRows}</div>
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
  handleClick: PropTypes.func,
  handleEnter: PropTypes.func,
  row: PropTypes.array,
  selectedLetter: PropTypes.string,
  letterStates: PropTypes.array,
  allRows: PropTypes.array,
};

/*   // const sixRows = Array(5)
  //   .fill()
  //   .map(() => eachRow); */
