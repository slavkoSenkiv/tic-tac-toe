export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li
          className={turns.indexOf(turn) === 0 ? "highlighted" : undefined}
          key={`${turn.square.row}${turn.square.col}`}
        >
          player {turn.player} selected 
          {turn.square.row + 1} row & 
          {turn.square.col + 1} column
        </li>
      ))}
    </ol>
  );
}
