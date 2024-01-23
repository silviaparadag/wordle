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

  // const emptyRow = Array.from({ length: 5 }, (_, index) => (
  //   <div key={index} className="word__letter">
  //     {' '}
  //   </div>
  // ));
  const [row, setRow] = useState([]);

  const emptyRow = Array.from({ length: 5 }, (_, index) => ' ');

  useEffect(() => {
    dataApi.getWordFromJson().then((data) => {
      const result = data.map((eachProject) => eachProject);
      setWords(result);
      const randomIndex = Math.floor(Math.random() * result.length);
      setRandomWord(result[randomIndex]);
      setRow([emptyRow]);
    });
  }, []);
  console.log(randomWord);
  console.log(row);
  const handleClick = (ev) => {
    ev.preventDefault();
    console.log('click ' + ev.target.value);
    const letter = ev.target.value;
    setSelectedLetter(letter);
    const updatedRow = [...row];
    const firstEmptyIndex = updatedRow[0].findIndex(
      (element) => element === ' '
    );
    console.log(firstEmptyIndex);
    if (usedLetters.length < 5) {
      if (firstEmptyIndex !== -1) {
        updatedRow[0][firstEmptyIndex] = letter; // Update the first row directly
        setRow(updatedRow); // Update the row state
      }
      console.log(letter);
      console.log(updatedRow);
      setUsedLetters([...usedLetters, letter]);
    }
  };

  console.log(selectedLetter);
  console.log(usedLetters);

  const handleEnter = (ev) => {
    ev.preventDefault();
    console.log('enter');
    const lettersRandomWord = randomWord.split('');
    console.log(lettersRandomWord);
    const updatedLetterStates = lettersRandomWord.map((letter, ind) => {
      if (usedLetters.includes(letter) && usedLetters.indexOf(letter) === ind) {
        // correctCount++;
        return 'correct';
      } else if (
        usedLetters.includes(letter) &&
        usedLetters.indexOf(letter) !== ind
      ) {
        // presentCount++;
        return 'present';
      } else {
        return 'absent';
      }
    });
    console.log(updatedLetterStates);

    setIsCorrect(updatedLetterStates.every((state) => state === 'correct'));
    setIsPresent(updatedLetterStates.some((state) => state === 'present'));
    setIsAbsent(updatedLetterStates.every((state) => state === 'absent'));
    setLetterStates(updatedLetterStates);
  };

  const updateProposedWord = usedLetters.map((letter, ind) => {
    const letterClassName = `word__letter ${letterStates[ind]}`;
    return (
      <div key={ind} className={letterClassName}>
        {letter}
      </div>
    );
  });

  return (
    <>
      {' '}
      <div className="App">
        <Header />
        <main className="main">
          <Main
            words={words}
            proposedWord={updateProposedWord}
            handleClick={handleClick}
            handleEnter={handleEnter}
            row={row}
            selectedLetter={selectedLetter}
          />
        </main>
        <Footer />
      </div>{' '}
    </>
  );
}

export default App;
