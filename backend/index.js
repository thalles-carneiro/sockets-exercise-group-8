const { Server } = require('socket.io');

let player = 0;
const positions = {
  top: '40%',
  left: '40%',
};

const io = new Server({ cors: { origin: '*' } });

const randomCoordinates = () => {
  const top = Math.round(Math.random() * 80);
  const left = Math.round(Math.random() * 80);

  positions.top = `${top}%`;
  positions.left = `${left}%`;

  return positions;
};

io.on('connection', (socket) => {
  player += 1;

  console.log('Conectou!');

  socket.on('emitDale', () => {
    io.emit('moveSquare', randomCoordinates());
  });

  socket.on('startGame', () => {
    io.emit('startSquare', positions);
  });

  socket.on('restartGame', () => {
    io.emit('moveSquare', { top: '40%', left: '40%' });
  });
})

const { PORT = 3001 } = process.env;
io.listen(PORT, console.log(`Listening on port ${PORT}`));
