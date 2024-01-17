import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Hero';
import Footer from './components/Footer';
import dataApi from './services/dataApi';

import './styles/App.scss';

function App() {
  const [words, setWords] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  // const [selectedLetter, setSelectedLetter] = useState('');

  useEffect(() => {
    dataApi.getWordFromJson().then((data) => {
      const result = data.map((eachProject) => eachProject);
      setWords(result);
      console.log(result);
    });
  }, []);

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log('click ' + ev.target.value);
  };

  // const handleLetterClicked = (ev) => {
  //   setUsedLetters([...usedLetters, ev.target.value]);
  // };
  // console.log(handleLetterClicked());

  const randomWord = Math.floor(Math.random() * words.length);
  console.log(randomWord, words[randomWord]);
  const selectedWord = words[randomWord];
  console.log(selectedWord);

  // const renderLetters = () => {
  //   const wordLetters = selectedWord.split('');
  //   return wordLetters.map((letter, ind) => {
  //     if (usedLetters.includes(letter)) {
  //       return (
  //         <li key={ind} className="correct">
  //           {letter}
  //         </li>
  //       );
  //     } else {
  //       return (
  //         <li key={ind} className="wrong">
  //           {letter}
  //         </li>
  //       );
  //     }
  //   });
  // };
  // console.log(renderLetters());

  // const renderCorrectLetters = () => {
  //   const correctLetters = usedLetters.filter(
  //     (letter) =>
  //       !selectedWord.includes(letter).map((letter, ind) => (
  //         <li key={ind} className="letter">
  //           {letter}
  //         </li>
  //       ))
  //   );
  //   return correctLetters;
  // };
  // console.log(renderCorrectLetters());

  // const renderWrongLetters = () => {
  //   const wrongLetters = usedLetters.filter(
  //     (letter) =>
  //       !selectedWord.includes(letter).map((letter, ind) => (
  //         <li key={ind} className="letter">
  //           {letter}
  //         </li>
  //       ))
  //   );
  //   return wrongLetters;
  // };
  // console.log(renderWrongLetters());

  return (
    <>
      {' '}
      <div className="App">
        <Header />
        <main className="main">
          <Main words={words} />
          <div className="keyboard">
            <div className="keyboard__row">
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'q'}
              >
                q
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'w'}
              >
                w
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'e'}
              >
                e
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'r'}
              >
                r
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'t'}
              >
                t
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'y'}
              >
                y
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'u'}
              >
                u
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'i'}
              >
                i
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'o'}
              >
                o
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'p'}
              >
                p
              </button>
            </div>
            <div className="keyboard__row">
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'a'}
              >
                a
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'s'}
              >
                s
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'d'}
              >
                d
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'f'}
              >
                f
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'g'}
              >
                g
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'h'}
              >
                h
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'j'}
              >
                j
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'k'}
              >
                k
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'l'}
              >
                l
              </button>
            </div>
            <div className="keyboard__row">
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'q'}
              >
                Enter
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'z'}
              >
                z
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'x'}
              >
                x
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'c'}
              >
                c
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'v'}
              >
                v
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'b'}
              >
                b
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'n'}
              >
                n
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'m'}
              >
                m
              </button>
              <button
                onClick={handleClick}
                className="keyboard__key"
                value={'Del'}
              >
                Del
              </button>
            </div>
          </div>
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
