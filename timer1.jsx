import { useState } from "react";

function Timer1(){
    const[time,settime]= useState(0);
    const IncreseTimer=()=>{
        settime((prev)=>(prev+1))


    };
    const DecreseTimer=()=>{
        settime((prev)=>(prev-1))
    };

     const ResetTimer=()=>{
        settime(0)
    };
    
    return(
        <div>
            <h1>{time}</h1>
            <button onClick={IncreseTimer}>Start</button>
            <button onClick={DecreseTimer}>Decrese</button>
            <button onClick={ResetTimer}>Reset</button>

            
        </div>
    )

}
export default Timer1;