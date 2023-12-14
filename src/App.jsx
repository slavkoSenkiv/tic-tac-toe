import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((innerArr) => [...innerArr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[col][row] = player;
  }
  return gameBoard;
}

function deriveActivePlayer(gameTurns) {
  let activePlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const gameBoard = deriveGameBoard(gameTurns);
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleNameChange(symbol, newPlayer) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newPlayer,
      };
    });
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => [
      {
        square: {
          row: rowIndex,
          col: colIndex,
        },
        player: activePlayer,
      },
      ...prevGameTurns,
    ]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            onNameChange={handleNameChange}
            isActive={activePlayer === "X"}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            onNameChange={handleNameChange}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
        <Log />
        <GameOver />
      </div>
    </main>
  );
}

export default App;
