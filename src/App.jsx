import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Hero';
import Footer from './components/Footer';
import dataApi from './services/dataApi';

import './styles/App.scss';

function App() {
  const [words, setWords] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');

  useEffect(() => {
    dataApi.getWordFromJson().then((data) => {
      const result = data.map((eachProject) => eachProject);
      setWords(result);
    });
  }, []);

  const randomWord = Math.floor(Math.random() * words.length);
  console.log(randomWord, words[randomWord]);
  const selectedWord = words[randomWord];
  console.log(selectedWord);

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log('click ' + ev.target.value);
    const letter = ev.target.value;
    setSelectedLetter(letter);
    if (usedLetters.length < 5) {
      setUsedLetters([...usedLetters, letter]);
    }
  };
  console.log(selectedLetter);
  console.log(usedLetters);

  const handleEnter = (ev) => {
    ev.preventDefault();
    console.log('enter');
  };

  // const proposedWord = [...usedLetters];
  // console.log(proposedWord);

  const proposedWord = usedLetters.map((letter, ind) => {
    return (
      <li key={ind} className="word__letter">
        {letter}
      </li>
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
            proposedWord={proposedWord}
            handleClick={handleClick}
            handleEnter={handleEnter}
          />
        </main>
        <Footer />
      </div>{' '}
    </>
  );
}

export default App;

/*
words={words} renderLetters={renderLetters} 
*/
