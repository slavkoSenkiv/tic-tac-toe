export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h1> Game Over</h1>
      {winner ? <p>winner is {winner}</p> : <p>the game is draw</p>}
      <p>
        <button onClick={onRestart}>Restart</button>
      </p>
    </div>
  );
}s
