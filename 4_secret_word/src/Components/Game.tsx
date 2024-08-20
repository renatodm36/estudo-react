import './Game.css';

interface GameProps {
  verifyLetter: (letter: string) => void;
  pickedWord: string;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  score: number;
}

const Game: React.FC<GameProps> = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('letter') as HTMLInputElement;
    const letter = input.value.toLowerCase();

    if (letter && !guessedLetters.includes(letter) && !wrongLetters.includes(letter)) {
      verifyLetter(letter);
    }

    input.value = "";
  };

  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span key={index} className='letter'>
              {letter}
            </span>
          ) : (
            <span key={index} className='blankSquare'></span>
          )
        )}
      </div>
      <div className='letterContainer'>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type='text' name='letter' maxLength={1} required />
          <button type='submit'>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, index) => (
          <span key={index}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
