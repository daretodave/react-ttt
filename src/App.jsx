import PlayerInfo from "./components/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";

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

    function handleSelectTile(rowIndex, columnIndex) {
        setGameTurns(prevTurns => [{
            tile: {
                row: rowIndex,
                col: columnIndex
            },
            player: getActivePlayer(prevTurns)
        }, ...prevTurns]);
    }

    return (<main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <PlayerInfo isActive={activePlayer === 'X'} name="Player 1" symbol="X"/>
                    <PlayerInfo isActive={activePlayer === 'O'} name="Player 2" symbol="O"/>
                </ol>
                <GameBoard turns={gameTurns} onSelectTile={handleSelectTile}/>
            </div>
            <Log turns={gameTurns}/>
        </main>

    )
}

export default App
