import Player from "./components/Player";
/* import GameBoard from "./components/GameBoard";
 */
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName={"Player 1"} symbol={"X"} />
          <Player playerName={"Player 2"} symbol={"O"} />
        </ol>
        GAME BOARD
{/*         <GameBoard />
 */}      </div>
      LOG
    </main>
  );
}

export default App;
