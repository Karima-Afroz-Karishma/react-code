import {useEffect} from 'react';

function Propsuseeffect({props}){

    useEffect(()=>{
        console.log("update value")
    },[props])

    useEffect(()=>{
        return()=>{
            console.log("unmount value only")
        }
    })

    
    return(
        <div>
            <h1>counter value {props}</h1>

        </div>
    )
}
export default Propsuseeffect;