const initialGameBoard = [
    [null, 'X', 'O'],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>{
                        row.map((symbol, columnIndex) =>
                            <li key={columnIndex}>
                                <button>{symbol}</button>
                            </li>
                        )
                    }</ol>
                </li>
            })}
        </ol>
    )
}