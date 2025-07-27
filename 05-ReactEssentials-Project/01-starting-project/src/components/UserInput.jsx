import { useState } from "react";

export default function UserInput({nameTag, value, onInputChange }){
    function handleNumber(event){
        onInputChange(event.target.value);
        
    }
    
    return(
        <li>
            <label className="label">{nameTag}</label>
            <input 
                id="input" 
                type="number"  
                value={value} 
                onChange={handleNumber} 
            />
        </li>
    );
}