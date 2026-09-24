import { useState } from "react";
import Clock from "./clock";

function Clockdata() {
  const [color, setcolor] = useState("wheat");
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Digital Clock In React js</h1>
      <select
        style={{
          marginLeft: "500px",
          width: "200px",
          padding: "10px",
          borderRadius: "5px",
          textAlign: "center",
          marginTop: "50px",
        }}
        onChange={(event) => setcolor(event.currentTarget.value)}
      >
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"blue"}>Blue</option>
        <option value={"yellow"}>Yellow</option>
      </select>
      <Clock data={color} />
    </div>
  );
}
export default Clockdata;
