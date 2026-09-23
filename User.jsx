function User({data}){
    return(
        <div style = {{
                border: "1px solid green ",
                padding: "10px",
                margin: "10px",
                width: "450px",
                borderRadius:" 10px"
        }}>
            <h3>Name: <span style={{color:"green", padding:"10px"}}>{data.name}</span></h3>
            <h3>Age: <span style={{color:"green", padding:"10px"}}>{data.age}</span></h3>
            <h3>Email: <span style={{color:"green", padding:"10px"}}>{data.email}</span></h3>
           





        </div>
    )
}
export default User;