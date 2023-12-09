import { useState } from "react";

export default function Player({ initialName, symbol, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleSetIsEditing() {
    setIsEditing((currStatus) => !currStatus);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handlePlayerName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            defaultValue={playerName}
            onChange={handlePlayerName}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleSetIsEditing}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  );
}
