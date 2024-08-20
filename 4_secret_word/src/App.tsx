import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//Data
import { wordsList } from './data/words';

//Components
import StartScreen from './Components/StartScreen';
import Game from './Components/Game';
import GameOver from './Components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameState, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState<string[]>([]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words) as Array<keyof typeof words>;
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    const { word, category } = pickWordAndCategory();
    const wordLetters = word.toLowerCase().split("");

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(3);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter: string) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((prevGuessedLetters) => [
        ...prevGuessedLetters,
        normalizedLetter,
      ]);

      // Verifica se todas as letras foram adivinhadas
      if (letters.every((letter) => guessedLetters.includes(letter) || letter === normalizedLetter)) {
        setScore((prevScore) => prevScore + 100); // Exemplo: 100 pontos por palavra adivinhada
        setGameStage(stages[2].name); // Fim de jogo
      }
    } else {
      setWrongLetters((prevWrongLetters) => [
        ...prevWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((prevGuesses) => prevGuesses - 1);

      if (guesses === 1) {
        setGameStage(stages[2].name); // Fim de jogo se não houver mais tentativas
      }
    }
  };

  const retry = () => {
    setScore(0);
    startGame();
  };

  return (
    <div className="App">
      {gameState === 'start' && <StartScreen startGame={startGame} />}
      {gameState === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameState === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
