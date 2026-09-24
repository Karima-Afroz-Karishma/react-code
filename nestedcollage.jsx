import Nestedstudent from "./nestedstudent";

const Nestedcollage = ({data})=>{

    return(
        <div style={{
            backgroundColor:"#ccc",
            padding:"30px",
            borderBottom:"2px solid #000",
            margin:"20px",
            borderRadius:"10px"

        }}>
          <h1>Name:{data.name}</h1>
          <ul>
            <li>
              <h3>City:{data.city}</h3>
            </li>
            <li>
              <h3>Website:{data.email}</h3>
            </li>
            <li>
                <Nestedstudent students = {data.student}/>
            </li>
          </ul>
        </div>
  

        

    )

}
export default Nestedcollage;