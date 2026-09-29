import { useEffect, useState } from "react";

function Timer2(){

    const[seconds, setSeconds]= useState(0);
    const[isrunning, setisrunning]= useState(false);

    // const startsecond =()=>{

    //     setSeconds(seconds+1);
    // }
    useEffect(()=>{
        let interval;
        if(isrunning){
            interval= setInterval(()=>{
                setSeconds((prev)=>(prev+1))

            },1000)
        }
        return() => clearInterval(interval);

    },[isrunning])

    const start=()=>{

        setisrunning(true);
    }
    const stop=()=>{
        setisrunning(false);
    }
    const reset=()=>{
        setisrunning(false);
        setSeconds(0);

    }

    const hour = Math.floor(seconds/3600);
    const minute = Math.floor((seconds%3600)/60);
    const second = seconds%60;
    const formatTime = (time)=> String(time).padStart(2,"0")

    return(
        <div style={style.container}>
            <h1>{seconds}</h1>
            <h2 style={style.time}>
                {formatTime(hour)}:{formatTime(minute)}:
                {formatTime(second)}

            </h2>
            <div style={style.buttons}>
            <button onClick={start} style={style.start}>Start</button>
            <button onClick={stop} style={style.stop}>Stop</button>
            <button onClick={reset} style={style.reset}>Reset</button>
            </div>

        </div>
    )
}
const style ={
    container:{
    width: "350px",
    margin: "100px auto",
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#111827",
    color: "white",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",

    },
    time: {
    fontSize: "40px",
    margin: "30px 0",
    fontFamily: "monospace",
  },
    buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  start:{
    backgroundColor: "#16a34a",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",

  },
    stop: {
    backgroundColor: "#f59e0b",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  reset:{
    backgroundColor: "#dc2626",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
}
export default Timer2;