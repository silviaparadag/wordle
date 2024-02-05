import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Hero';
import Footer from './components/Footer';
import dataApi from './services/dataApi';

import './styles/App.scss';

function App() {
  const [words, setWords] = useState([]);
  const [randomWord, setRandomWord] = useState('');
  const [usedLetters, setUsedLetters] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAbsent, setIsAbsent] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const [letterStates, setLetterStates] = useState([]);
  const [row, setRow] = useState([]);
  const [allRows, setAllRows] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [proposedWords, setProposedWords] = useState([[]]);

  const emptyRow = Array.from({ length: 5 }, (_, index) => ' ');
  const allEmptyRows = Array(6)
    .fill()
    .map(() => [...emptyRow]);

  useEffect(() => {
    dataApi.getWordFromJson().then((data) => {
      const result = data.map((eachProject) => eachProject);
      setWords(result);
      const randomIndex = Math.floor(Math.random() * result.length);
      setRandomWord(result[randomIndex]);
      setRow([emptyRow]);
      setAllRows(allEmptyRows);
    });
  }, []);

  console.log(randomWord);
  console.log(row);
  console.log(allRows);

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log('click ' + ev.target.value);
    const letter = ev.target.value;
    setSelectedLetter(letter);
    const updatedAllRows = [...allRows];
    const updatedRow = [...updatedAllRows[currentRowIndex]];
    const firstEmptyIndex = updatedRow.findIndex((element) => element === ' ');
    console.log(firstEmptyIndex);
    if (usedLetters.length < 5 && currentRowIndex < 6) {
      if (firstEmptyIndex !== -1) {
        updatedRow[firstEmptyIndex] = letter;
        updatedAllRows[currentRowIndex] = updatedRow;
        setAllRows(updatedAllRows);
      }
    }
    console.log(letter);
    console.log(updatedRow);

    setUsedLetters([...usedLetters, letter]);
  };

  console.log(selectedLetter);
  console.log(usedLetters);
  console.log(row);
  const arrayRandomWord = randomWord.split('');
  console.log(arrayRandomWord);

  const handleEnter = (ev) => {
    ev.preventDefault();
    console.log('enter');
    const lettersRandomWord = randomWord.split('');
    setProposedWords([...proposedWords, usedLetters]);
    console.log(lettersRandomWord);
    const updatedLetterStates = usedLetters.map((letter, ind) => {
      if (
        lettersRandomWord.includes(letter) &&
        lettersRandomWord.indexOf(letter) === ind
      ) {
        return 'correct';
      } else if (
        lettersRandomWord.includes(letter) &&
        lettersRandomWord.indexOf(letter) !== ind
      ) {
        return 'present';
      } else {
        return 'absent';
      }
    });

    console.log(updatedLetterStates);
    console.log(row);
    setIsCorrect(updatedLetterStates.every((state) => state === 'correct'));
    setIsPresent(updatedLetterStates.some((state) => state === 'present'));
    setIsAbsent(updatedLetterStates.every((state) => state === 'absent'));
    setLetterStates(updatedLetterStates);
    setCurrentRowIndex(currentRowIndex + 1);
    setUsedLetters([]);
  };
  console.log(currentRowIndex);

  return (
    <>
      {' '}
      <div className="App">
        <Header />
        <main className="main">
          <Main
            words={words}
            handleClick={handleClick}
            handleEnter={handleEnter}
            row={row}
            selectedLetter={selectedLetter}
            letterStates={letterStates}
            allRows={allRows}
            currentRowIndex={currentRowIndex}
          />
        </main>
        <Footer />
      </div>{' '}
    </>
  );
}

export default App;
