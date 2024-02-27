import PlayerInfo from "./components/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
function getActivePlayer(turns) {
    let activePlayer = 'X';
    if (turns.length && turns[0].player === 'X') {
        activePlayer = 'O'
    }

    return activePlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = getActivePlayer(gameTurns);

    const gameBoard = [...initialGameBoard.map(row => [...row])];

    for (const {tile, player} of gameTurns) {
        const {
            row,
            col
        } = tile;

        gameBoard[row][col] = player;
    }

    let winner = null;

    for (let [comboA, comboB, comboC] of WINNING_COMBINATIONS) {
        const firstTile = gameBoard[comboA.row][comboA.column];
        const secondTile = gameBoard[comboB.row][comboB.column];
        const thirdTile = gameBoard[comboC.row][comboC.column];

        if (firstTile
            && firstTile === secondTile
            && firstTile === thirdTile) {
            winner = firstTile;
        }
    }

    const isGameDraw = gameTurns.length === 9 && winner === null;

    function handleSelectTile(rowIndex, columnIndex) {
        setGameTurns(prevTurns => [{
            tile: {
                row: rowIndex,
                col: columnIndex
            },
            player: getActivePlayer(prevTurns)
        }, ...prevTurns]);
    }

    function handleSelectRematch() {
        setGameTurns([]);
    }

    return (<main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <PlayerInfo isActive={activePlayer === 'X'} name="Player 1" symbol="X"/>
                    <PlayerInfo isActive={activePlayer === 'O'} name="Player 2" symbol="O"/>
                </ol>
                {(winner || isGameDraw) && <GameOver onClickRematch={handleSelectRematch} name={winner}/>}
                <GameBoard gameBoard={gameBoard} turns={gameTurns} onSelectTile={handleSelectTile}/>
            </div>
            <Log turns={gameTurns}/>
        </main>

    )
}

export default App
