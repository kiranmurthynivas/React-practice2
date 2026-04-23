import { useState } from "react"

export default function LudoBoard() {

    let [moves, setmoves] = useState({yellow: 0 , blue: 0, red: 0 , green: 0});

    let updateBlue = () => {
         setmoves((prevMoves) => {
            return {...prevMoves, blue:prevMoves.blue + 1};
         })
    }
    let updateYellow = () => {
         setmoves((prevMoves) => {
            return {...prevMoves, blue:prevMoves.yellow + 1};
         })
    }

    let updateGreen = () => {
         setmoves((prevMoves) => {
            return {...prevMoves, blue:prevMoves.green + 1};
         })
    }

    let updateRed = () => {
         setmoves((prevMoves) => {
            return {...prevMoves, blue:prevMoves.Red + 1};
         })
    }

    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor : "yellow" , color: "black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
                <p >Red moves = {moves.red}</p>
                <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}