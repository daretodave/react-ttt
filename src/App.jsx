import PlayerInfo from "./components/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const INIT_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const INIT_PLAYERS = {
    X: 'Player 1',
    O: 'Player 2'
};
function getActivePlayer(turns) {
    let activePlayer = 'X';
    if (turns.length && turns[0].player === 'X') {
        activePlayer = 'O'
    }

    return activePlayer;
}

function getWinnerFromBoard(gameBoard, players) {
    for (let [comboA, comboB, comboC] of WINNING_COMBINATIONS) {
        const firstTile = gameBoard[comboA.row][comboA.column];
        const secondTile = gameBoard[comboB.row][comboB.column];
        const thirdTile = gameBoard[comboC.row][comboC.column];

        if (firstTile
            && firstTile === secondTile
            && firstTile === thirdTile) {
            return players[firstTile];
        }
    }

    return null;
}

function getBoardFromTurns(turns) {
    const board = [...INIT_GAME_BOARD.map(row => [...row])];

    for (const {tile, player} of turns) {
        const {
            row,
            col
        } = tile;

        board[row][col] = player;
    }

    return board;
}

function App() {
    const [players, setPlayers] = useState(INIT_PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = getActivePlayer(gameTurns);

    const gameBoard = getBoardFromTurns(gameTurns);
    const winner = getWinnerFromBoard(gameBoard, players);
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

    function handlePlayerNameChange(symbol, playerName) {
        setPlayers(players => {
            return {
                ...players,
                [symbol]: playerName
            };
        })
    }

    return (<main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <PlayerInfo onNameChanged={handlePlayerNameChange} isActive={activePlayer === 'X'} name={INIT_PLAYERS.X} symbol="X"/>
                    <PlayerInfo onNameChanged={handlePlayerNameChange} isActive={activePlayer === 'O'} name={INIT_PLAYERS.O} symbol="O"/>
                </ol>
                {(winner || isGameDraw) && <GameOver onClickRematch={handleSelectRematch} name={winner}/>}
                <GameBoard gameBoard={gameBoard} turns={gameTurns} onSelectTile={handleSelectTile}/>
            </div>
            <Log turns={gameTurns}/>
        </main>

    )
}

export default App
