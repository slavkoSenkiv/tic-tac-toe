import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import React from "react";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameturns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );

    setGameturns((prevGameTurns) => {
      let currPlayer = "X";

      if (prevGameTurns.length > 0 && prevGameTurns[0].player === "X") {
        currPlayer = "O";
      }

      const updatedGameTurns = [
        { square: { col: colIndex, row: rowIndex }, player: currPlayer },
        ...prevGameTurns
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
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
