import { useState } from "react";
export default function Player({ name, symbol, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleSetIsEditing() {
    setIsEditing((currStatus) => !currStatus);
  }

  function getName(event){
    return event.target.value;
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (<input defaultValue={name} />) 
        : (<span className="player-name">{name}</span>)}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleSetIsEditing}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  );
}
