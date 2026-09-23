import { useState } from "react";

function Radio() {
  const [gender, setGender] = useState("female");
  const[city,setCity] = useState("Dinajpur");
  return (
    <div
      style={{
        width: "600px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "#f5f5f5",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
      }}
    >
      <h1 style={{ color: "blue", fontSize: "1rem " }}>
        {" "}
        Handle radio and dropdown
      </h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        value={"male"}
        id="male"
        checked={gender == "male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        value={"female"}
        id="female"
        checked = {gender == 'female'}
      />
      <label htmlFor="female">Female</label>
      <h2>{gender}</h2>
      <br></br>
      <br></br>
      <h4>Select Country</h4>
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={"dinajpur"}>
        <option value="dhaka">Dhaka</option>
        <option value="dinajpur">Dinajpur</option>
        <option value="thakurgaon">Thakurgaon</option>
      </select>
      <h4>Selected City:{city}</h4>
    </div>
  );
}
export default Radio;
