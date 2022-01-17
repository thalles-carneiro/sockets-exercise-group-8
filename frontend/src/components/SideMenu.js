import React from "react";
import GameButton from "./GameButton";
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function SideMenu() {
  const startGame = () => {
    socket.emit('startGame');
    console.log('Start Game');
  };

  const restartGame = () => {
    console.log('Restart Game');
    socket.emit('restartGame');
  };

  return (
    <aside className='sideMenu'>
      <GameButton
        textBtn={'Iniciar Jogo'}
        callback={startGame}
      />
      <GameButton
        textBtn={'Reiniciar Jogo'}
        callback={restartGame}
      />
    </aside>
  );
}

export default SideMenu;