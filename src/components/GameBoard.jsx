import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectTile, activePlayerSymbol}) {
    const [
        gameBoard,
        setGameBoard,
    ] = useState(initialGameBoard);

    function handleSelectTile(rowIndex, columnIndex) {
        setGameBoard(priorGameBoard => {
            const board = [...priorGameBoard.map(row => [...row])]

            board[rowIndex][columnIndex] = activePlayerSymbol;

            return board;
        });

        onSelectTile();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>{
                        row.map((symbol, columnIndex) =>
                            <li key={columnIndex}>
                                <button onClick={() => handleSelectTile(rowIndex, columnIndex)}>{symbol}</button>
                            </li>
                        )
                    }</ol>
                </li>
            })}
        </ol>
    )
}