import React, {useState} from "react";
function Counter() {
    const [count, countValue] = useState(10)
    function decrement(){
        countValue(count + 1)
    }
    function increment(){
        countValue(count - 1)
    }
    return(
        <>
        <div className="wrapper__counter">
            <h2>Value{count}</h2>
            <button onClick={decrement}>+</button>
            <button onClick={increment}>-</button>
        </div>
        
       
        </>
    )
}
export default Counter;