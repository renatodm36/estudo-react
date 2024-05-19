import React from 'react';
import './StartScreen.css';

interface StartScreenProps {
  startGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ startGame }) => {
  return (
    <div className='start'>
      <h1>Secret Word</h1>
      <p>Pressione no botão para iniciar o jogo</p>
      <button onClick={startGame}>Começar o Jogo</button>
    </div>
  );
};

export default StartScreen;
