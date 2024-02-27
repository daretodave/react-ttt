import {useState} from "react";

export default function PlayerInfo({name, symbol, onNameChanged, isActive}) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentName, setCurrentName] = useState(name);

    function handleEdit() {
        setIsEditing(isEditing => !isEditing);
        if (isEditing) {
            onNameChanged(symbol, currentName);
        }
    }

    function handleChange(event) {
        const name = event.target.value;

        setCurrentName(name);

    }

    const playerName = isEditing
        ? <input type="text" required value={currentName} onChange={handleChange} />
        : <span className="player-name">{currentName}</span>;

    return (<li className={isActive ? "active" : undefined}>
        <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>)
}