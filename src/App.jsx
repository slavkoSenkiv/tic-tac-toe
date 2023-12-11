import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function App() {
  const [players, setPlayers] = useState(PLAYERS);

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
        <GameOver />
      </div>
    </main>
  );
}

export default App;
