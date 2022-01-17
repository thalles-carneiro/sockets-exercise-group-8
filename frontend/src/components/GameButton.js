import React from "react";

function GameButton({ textBtn, callback}) {
  return (
    <button
      className='gameButton'
      onClick={callback}
    >
      { textBtn }
    </button>
  );
}

export default GameButton;