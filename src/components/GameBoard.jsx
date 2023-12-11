export default function GameBoard( { board }) {
  return (
    <div>
      {board.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((col, colIndex) => (
            <li key={colIndex}>{board[row][col]}</li>
          ))}
        </ol>
      ))}
    </div>
  )
}