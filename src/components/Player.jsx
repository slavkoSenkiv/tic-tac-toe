import { useState } from "react";

export default function Player({
  isActive,
  initialName,
  symbol,
  onNameChange,
}) {
  const [isEditing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setEditing((editingStatus) => !editingStatus);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function getNewName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            defaultValue={playerName}
            onChange={getNewName}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
