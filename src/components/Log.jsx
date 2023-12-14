export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn) => (
        <li
          key={`${turn.square.row}${turn.square.col}`}
          className={gameTurns.indexOf(turn) === 0 ? "highlighted" : undefined}
        >
          player {turn.player} row {turn.square.row + 1} col{" "}
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
