import { useContext } from "react";
import { Subjectcontext } from "./contextData";

function Subject(){
    const subject = useContext(Subjectcontext)
    return(
        <div  style={{backgroundColor:"red" , padding: 20,color: "white"}}>
            <h1>Subject is : {subject}</h1>
        </div>
    )
}
export default Subject;