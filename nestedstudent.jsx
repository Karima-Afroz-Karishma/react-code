const Nestedstudent = ({ students }) => {
  return (
    <div>
      <h3>Students</h3>
      {students.map((student) => (
       
         <ul>
          <li>Name:{student.name}</li>
          <li>
            age:{student.age}
          </li>
          <li>
            email:{student.email}
          </li>
        </ul>
       
      ))}
    </div>
  );
};
export default Nestedstudent;
