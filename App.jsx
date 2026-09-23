import { useState } from "react";
import Counter from "./Counter";
import Toggle from "./toggle";
import Collage from "./collage";
import Prop from "./defaultprops"
import Checkbox from "./checkbox";
import Card from "./card";
import "./index.css"

function App() {
  // const [val, setVal]= useState("")
  // const[name,setname]=useState("karishma");
  // const[password,setpassword]=useState("1234");
  // const[email,setemail]=useState("karishma@gmail.com");


  
  return (
    <div className="container">
      {/* <h1>Get Input Field</h1> */}
      {/* <h1>{val}</h1>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter Your name:"></input>
      <button onClick={()=>setVal("")}>Clear Value</button> */}
      {/* <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
      <form action ="" method = "get">
        <input type="text" value={name} onChange={(event)=>setname(event.target.value)} placeholder="Enter name"/>
        <br></br>
        <input type="password" value={password} onChange={(event)=>setpassword(event.target.value)} placeholder="Enter password"/>
        <br></br>
        <input type="text" value={email} onChange={(event)=>setemail(event.target.value)} placeholder="Enter email"/>
        <br></br>
        <button>Submit</button>
        <button type="button" onClick={()=>{setname('');setpassword('');setemail('')}}>Clear</button>

      </form> */}
      {/* <Checkbox/>   */}
      <Card/>
    </div>
  );
}
export default App;
