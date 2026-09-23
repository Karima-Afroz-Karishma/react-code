import User from "./User.jsx"
function Array() {
  const userData = [
    {
      id: 1,
      name: "karishma",
      age: 28,
      email: "karishma@gmail.com"
    },
    {
      id: 2,
      name: "kanon",
      age: 26,
      email: "kanon@gmail.com"
    },
    {
      id: 3,
      name: "sneha",
      age: 23,
      email: "sneha@gmail.com"
    },
    {
      id: 4,
      name: "roshni",
      age: 19,
      email: "roshni@gmail.com"
    }
  ];

  return (
    <div>
     {
      userData.map((user)=>(
        <div key={user.id}>
         <User data = {user}/>
        </div>
      ))
     }
    </div>
  
  );
}

export default Array;
