import {useState} from "react";

export default function PlayerInfo({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentName, setCurrentName] = useState(name);

    function handleEdit() {
        setIsEditing(isEditing => !isEditing);
    }

    function handleChange(event) {
        setCurrentName(event.target.value);
    }

    const playerName = isEditing
        ? <input type="text" required value={currentName} onChange={handleChange} />
        : <span className="player-name">{currentName}</span>;

    return (<li>
        <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>)
}