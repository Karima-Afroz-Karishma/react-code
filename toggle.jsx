function Toggle({user}){

    return(
        <div>
            <hr></hr>
            <h1>user component</h1>
            {user.name}<br></br>
            {user.age}<br></br>
            {user.email}

        </div>
    )
}
export default Toggle;