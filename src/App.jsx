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
  const [names, setNames] = useState(PLAYERS);

  function handleNameChange(symbol, newName) {
    setNames((currNames) => {
      return {
        ...currNames,
        [symbol]: newName,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            initialNames={PLAYERS.X}
            symbol="X"
            onNameChange={handleNameChange}
          />
          <Player
            initialNames={PLAYERS.O}
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
