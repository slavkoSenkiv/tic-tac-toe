import { useState } from "react"

export default function Player ( {name, symbol}) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name)

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handlePlayerName() {
    setPlayerName(name.target.value)
  }
  

  return (
    <li> 
      {isEditing 
      ? <input type="text" required defaultValue={name}/>
      : <span className="player-name">{playerName}</span>}
      

      <button onClick={() => handleClick}>
        {isEditing ? "Save" : "Edit"}
      </button>

      <span className="player-symbol">{symbol}</span>
    </li>
  )
}