export default function GameOver({name, onClickRematch}) {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {name && <p>{name} won!</p>}
        {!name && <p>It's a draw!</p>}
        <p>
            <button onClick={onClickRematch}>Rematch!</button>
        </p>
    </div>
}