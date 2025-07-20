import { useState } from "react";
export default function Player({initialName,symbol}){
    const [playerName, setPlayerName] =useState(initialName);
    const [isEdeting, setIsEditing] =useState(false);
    function handleEditClick(){
        setIsEditing((editing)=>!editing);

    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }
    let editablePlayerName =<span className="player-name">{playerName}</span>;

    if (isEdeting){
        editablePlayerName =<input type="text" required value={playerName} onChange={handleChange} />;
    }
    return(
        <li>
            <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEdeting ? 'Save':'Edit' }</button>
        </li>
    );

}