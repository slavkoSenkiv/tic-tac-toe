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
  for (const turn in gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[col][row] = player;
  }
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const gameBoard = deriveGameBoard(gameTurns);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleNameChange(symbol, newPlayer) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newPlayer,
      };
    });
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) => {
      return currActivePlayer === "X" ? "O" : "X";
    });

    //stopped here, need to create derive active player function first
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
