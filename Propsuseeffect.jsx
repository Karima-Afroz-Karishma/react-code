import { useState } from "react";
import Propsuseeffect from "./propsuseeffect2";
function Propeffect(){
    const[button,setbutton] = useState(0);
    const[display,setdisplay]= useState(true);
    return(
        <div>
            <h1>hello</h1>
            {
                display? <Propsuseeffect props={button}/>:null
            }
            <button onClick={()=>setbutton(button+1)}>Counter{button}</button>
            <button onClick={()=>setdisplay(!display)}>toggle</button>

        </div>
    )
}
export default Propeffect;














