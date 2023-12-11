export default function GameBoard( { board }) {
  return (
    <ol id="game-board">
      <li>
        {board.map((row, rowIndex) => (
          <ol key={rowIndex}>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        ))}
      </li>
    </ol>
  )
}