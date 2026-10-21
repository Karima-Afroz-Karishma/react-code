import { useState } from "react";
import Collage from "./collage";
import { Subjectcontext } from "./contextData";


function App2(){
    const [subject, setSubject] = useState('')
    return(
        <div style={{backgroundColor:"yellow" , padding: 20}}>
            <Subjectcontext.Provider value = {subject}>
                <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
                    <option value ="">Select Subject</option>
                    <option value={"math"}>Math</option>
                    <option value={"english"}>English</option>
                    <option value={"biology"}>Biology</option>
                    <option value={"science"}>Science</option>
                </select>
            <h1>context Api</h1>
            <button onClick={()=>setSubject('')}>Clear Subject</button>
            <Collage/>
            </Subjectcontext.Provider>
            
        </div>
    )
}
export default App2;