import Subject from "./subject";
function Student(){
    return(
        <div  style={{backgroundColor:"green" , padding: 20,color: "white"}}>
            <h1>Student component</h1>
            <Subject/>
        </div>
    )
}
export default Student;