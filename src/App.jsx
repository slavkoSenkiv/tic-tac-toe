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


  function handleNameChange(symbol, newPlayer) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newPlayer,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            onNameChange={handleNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            onNameChange={handleNameChange}
          />
        </ol>
        <GameBoard />
        <Log />
        <GameOver board={gameBoard} />
      </div>
    </main>
  );
}

export default App;
