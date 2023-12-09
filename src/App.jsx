import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

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
  return (
    <main>
      <div id="game-container">
        <ol id="players" >
          <Player name={PLAYERS.X} symbol="X" />
          <Player name={PLAYERS.O} symbol="O" />
        </ol>
        <GameBoard />
        <Log />
        <GameOver />
      </div>
    </main>
  );
}

export default App;
