import { useEffect, useState } from "react";
const Clock = ({data}) => {
  const [clock, setclock] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setclock(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <div>
      <h1 style={{marginLeft:"500px",backgroundColor:"black", 
        color:data,
        width:"200px",
        padding:"10px",
        borderRadius:"5px",
        textAlign: "center",
        marginTop:"50px"
         
         }}>{clock}</h1>
    </div>
  );
};
export default Clock;
