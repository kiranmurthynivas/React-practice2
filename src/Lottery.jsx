import { useState } from "react"
import { genTicket , sum} from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n = 3, winningSum = 15}) {

    let [ticket , setTicket] = useState(genTicket(n));
    
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery game</h1>
            <div className="Lottery">
                <Ticket ticket={ticket}/>
            </div>
             <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <br></br>
            <h3>{isWinning && "Congratulations You Won!"}</h3>
        </div>
    )
}