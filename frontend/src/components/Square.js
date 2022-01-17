import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function Square() {
  const [coordinates, setCoordinates] = useState();

  socket.on('startSquare', (positions) => {
    setCoordinates(positions);
  });

  socket.on('moveSquare', (positions) => {
    setCoordinates(positions);
  });

  const handleClick = () => {
    socket.emit('emitDale');
  };

  return (
    <div
      className='square'
      style={ { ...coordinates, display: !coordinates && 'none' } }
      onClick={handleClick}
    ></div>
  );
}

export default Square;