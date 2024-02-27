import PlayerInfo from "./components/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectTile() {
        setActivePlayer(
            currentActivePlayer => currentActivePlayer === 'X' ? 'O' : 'X'
        );
    }

    return (<main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <PlayerInfo isActive={activePlayer === 'X'} name="Player 1" symbol="X"/>
                    <PlayerInfo isActive={activePlayer === 'O'} name="Player 2" symbol="O"/>
                </ol>
                <GameBoard activePlayerSymbol={activePlayer} onSelectTile={() => handleSelectTile()} />

            </div>
        </main>

    )
}

export default App
