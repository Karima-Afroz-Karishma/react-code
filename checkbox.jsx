import { useState } from "react";

function Checkbox(){

    const[skill, setSkills] = useState([]);
    const skillhandeler= (event)=>{
        console.log(event.target.value, event.target.checked)
        if(event.target.checked){
            setSkills([...skill,event.target.value])
        }else{
            setSkills([...skill.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
            <h3>Select your skill</h3>
            <input onChange={skillhandeler} type="checkbox" id="php" value="php"/>
            <label htmlFor="php">PHP</label>
            <br/>
            <br/>

            <input onChange={skillhandeler} type="checkbox" id="java" value ="java"/>
            <label htmlFor="java">JAVA</label>
            <br/>
            <br/>


            <input  onChange={skillhandeler} type="checkbox" id="python" value ="python" />
            <label htmlFor="python">PYTHON</label>

            <h1>{skill.toString()}</h1>

        </div>
    )
}
export default Checkbox;