//CSS
import './App.css';

//React
import { useCallback,useEffect,useState } from 'react';

//Data
import { wordsList } from './data/words';

//Components
import StartScreen from './Components/StartScreen';
import Game from './Components/Game';
import GameOver from './Components/GameOver';

const stages =[
  {id:1,name:"start"},
  {id:2,name:"game"},
  {id:3,name:"end"},
]

function App() {
  const[gameState, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);


  //Start the secret word game
  const startGame = () =>
  {
    setGameStage(stages[1].name);
  }

  // Processar letra clicada
  const verifyLetter = () =>
  {
    setGameStage(stages[2].name)
  }
  
  // Reiniciar Jogo
  const retry = () =>
  {
    setGameStage(stages[0].name)
  }

  return (
    <>
      <div className='App'>      
        {gameState==='start' && <StartScreen startGame={startGame}/>}
        {gameState==='game' && <Game verifyLetter={verifyLetter}/>}
        {gameState==='end' && <GameOver retry={retry}/>}
      </div>
    </>
  )
}

export default App
