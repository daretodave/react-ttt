import PlayerInfo from "./components/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";


function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectTile(rowIndex, columnIndex) {
        setActivePlayer(
            currentActivePlayer => currentActivePlayer === 'X' ? 'O' : 'X'
        );

        setGameTurns(prevTurns => {
            let currentPlayer = 'X';
            if (prevTurns.length && prevTurns[0].player === 'X') {
                currentPlayer = 'O'
            }

            return [{
                tile: {
                    row: rowIndex,
                    col: columnIndex
                },
                player: currentPlayer
            }, ...prevTurns];
        })
    }

    return (<main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <PlayerInfo isActive={activePlayer === 'X'} name="Player 1" symbol="X"/>
                    <PlayerInfo isActive={activePlayer === 'O'} name="Player 2" symbol="O"/>
                </ol>
                <GameBoard turns={gameTurns} onSelectTile={handleSelectTile} />
            </div>
            <Log turns={gameTurns} />
        </main>

    )
}

export default App
