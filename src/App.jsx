import PlayerInfo from "./components/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {


    return (<main>
            <div id="game-container">
                <ol id="players">
                    <PlayerInfo name="Player 1" symbol="X"/>
                    <PlayerInfo name="Player 2" symbol="O"/>
                </ol>
                <GameBoard />

            </div>
        </main>

    )
}

export default App
