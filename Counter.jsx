import { useState } from "react";
function Counter(){

    const [count,setCount] = useState(0)
    const [rcount, setRCount] = useState(10)
    return(
        <div>
            <h1>Counter:{count}</h1>
            <h2>Rcounter:{rcount}</h2>
            <button onClick={()=>setCount(count+1)}>Update counter</button>
            <button onClick={()=>setRCount(rcount-1)}>decrese Conter</button>

        </div>

    )
}
export default Counter;
