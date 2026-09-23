function Arrayloop() {
  const userData = [
    {
      id: 1,
      name: "karishma",
      age: 28,
      email: "karishma@gmail.com",
    },
    {
      id: 2,
      name: "kanon",
      age: 26,
      email: "kanon@gmail.com",
    },
    {
      id: 3,
      name: "sneha",
      age: 23,
      email: "sneha@gmail.com",
    },
    {
      id: 4,
      name: "roshni",
      age: 19,
      email: "roshni@gmail.com",
    },
  ];
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f3fa",
        padding: "50px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#333",
          }}
        >
          User Information
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#4f46e5",
                color: "white",
              }}
            >
              <th style={{ padding: "15px" }}>Id</th>
              <th style={{ padding: "15px" }}>Name</th>
              <th style={{ padding: "15px" }}>Age</th>
              <th style={{ padding: "15px" }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr
                key={user.id}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8585a3";
                  e.currentTarget.style.transform = "scale(1.01)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
               
                style={{
                  borderBottom: "1px solid #ddd",
                  transition: "all 0.2s ease",
                }}
              >
                <td style={{ padding: "20px" }}>{user.id}</td>
                <td
                  style={{
                    padding: "15px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {user.name}
                </td>
                <td style={{ padding: "15px" }}>{user.age}</td>
                <td
                  style={{
                    padding: "15px",
                    color: "#666",
                  }}
                >
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Arrayloop;
