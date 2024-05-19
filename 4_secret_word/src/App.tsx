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

  const startGame = () =>
  {
    setGameStage(stages[1].name);
  }

  return (
    <>
      <div className='App'>      
        {gameState==='start' && <StartScreen startGame={startGame}/>}
        {gameState==='game' && <Game/>}
        {gameState==='end' && <GameOver/>}
      </div>
    </>
  )
}

export default App
