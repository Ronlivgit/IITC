import { useState } from "react"
import "./Counter.css"

function Counter(props){

    // let counter = 0
    const [counter,setCounter] = useState(0)

    return (
        <div className="container">
            <h1>{counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1)
                }}>+</button>
            <button onClick={() => {
                setCounter(counter - 1)
                }}>-</button>
        </div>
    )
}

export default Counter

// Manganon state :
// אם שינינו משהו שדורש שינוי בדום, נשתמש ב"הצהרה" כדי ליצר את ההשפעה על הדום.
// import { useState } from "react"