export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h1>Game Over</h1>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <p><button>Restart</button></p>
    </div>
  )
}