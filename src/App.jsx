import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import React from "react";
import { useState } from "react";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }
  return currPlayer;
}

function App() {
  const [gameTurns, setGameturns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameturns((prevGameTurns) => {
      const currPlayer = deriveActivePlayer(prevGameTurns);
      const updatedGameTurns = [
        { square: { col: colIndex, row: rowIndex }, player: currPlayer },
        ...prevGameTurns,
      ];
      return updatedGameTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
