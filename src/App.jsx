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

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleNameChange(symbol, newPlayer) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newPlayer,
      };
    });
  }

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) => {
      return currActivePlayer === "X" ? "O" : "X";
    });
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
