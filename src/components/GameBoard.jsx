
export default function GameBoard({onSelectTile, gameBoard}) {
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>{
                        row.map((symbol, columnIndex) =>
                            <li key={columnIndex}>
                                <button disabled={symbol !== null} onClick={() => onSelectTile(rowIndex, columnIndex)}>{symbol}</button>
                            </li>
                        )
                    }</ol>
                </li>
            })}
        </ol>
    )
}