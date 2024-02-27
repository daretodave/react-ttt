export default function Log({turns}) {
    return <ol id="log">{turns.map((entry) => <li key={`${entry.tile.row}${entry.tile.col}`}>{entry.player} selected {entry.tile.row},{entry.tile.col}</li>)}</ol>
}