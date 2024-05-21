import './Game.css'

interface GameProps {
  verifyLetter: () => void;
}

const Game : React.FC<GameProps> = ({ verifyLetter }) => {
  return (
    <>
      <div>
          <h1>Game</h1>
          <button onClick={verifyLetter}>Fim de Jogo</button>
      </div>
    </>
  )
}

export default Game