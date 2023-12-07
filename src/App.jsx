import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import React from "react";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winningCombinations";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  let gameBoard = initialBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  
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
        {winner && <p>You won , {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
