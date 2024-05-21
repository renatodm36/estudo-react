import './GameOver.css'

interface Retry {
  retry: () => void;
}

const GameOver : React.FC<Retry> = ({ retry }) => {
  return (
    <>
    <div>
        <h1>Game Over</h1>
        <button onClick={retry}>Fim de Jogo</button>
    </div>
  </>
  )
}

export default GameOver