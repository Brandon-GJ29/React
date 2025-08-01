import { useState } from "react";
export default function Player({initialName,symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] =useState(initialName);
    const [isEdeting, setIsEditing] =useState(false);
    function handleEditClick(){
        setIsEditing((editing)=>!editing);

    }
    function handleChange(event){
        setPlayerName(event.target.value);
        if(isEdeting){
            onChangeName(symbol, playerName);
        }
    }
    let editablePlayerName =<span className="player-name">{playerName}</span>;

    if (isEdeting){
        editablePlayerName =<input type="text" required value={playerName} onChange={handleChange} />;
    }
    return(
        <li className={isActive ? 'active':undefined}>
            <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEdeting ? 'Save':'Edit' }</button>
        </li>
    );

}