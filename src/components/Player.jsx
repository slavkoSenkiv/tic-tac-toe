import { useState } from "react"

export default function Player ( { initialName, symbol, isActive }) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName)

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handlePlayerName(event) {
    setPlayerName(event.target.value)
  }
  

  return ( 
    <li className={isActive ? "active" : undefined}> 
      <span className="player">

        {isEditing 
        ? <input type="text" required defaultValue={playerName} onChange={handlePlayerName}/>
        : <span className="player-name">{playerName}</span>}
        
        <span className="player-symbol">{symbol}</span>

        <button onClick={handleClick}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  )
}