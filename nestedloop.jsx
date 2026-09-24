import Nestedcollage from "./nestedcollage";

const Nestedloop = () => {
  const CollageData = [
    {
      name: "thakurgaon govt",
      city: "Thakurgaon",
      website: "govt@test.com",
      student: [
        {
          name: "kaba",
          age: 15,
          email: "kaba@gmail.com",
        },
        {
          name: "kanon",
          age: 23,
          email: "kanon@gmail.com",
        },
        {
          name: "sneha",
          age: 22,
          email: "sneha@gmail.com",
        },
        {
          name: "roshni",
          age: 17,
          email: "roshni@gmail.com",
        },
      ],
    },
    {
      name: "Dinajpur Govt",
      city: "Dinajpur",
      website: "govt@test.com",
      student: [
        {
          name: "kaba",
          age: 15,
          email: "kaba@gmail.com",
        },
        {
          name: "kanon",
          age: 23,
          email: "kanon@gmail.com",
        },
        {
          name: "sneha",
          age: 22,
          email: "sneha@gmail.com",
        },
      ],
    },
    {
      name: "Dhaka Govt",
      city: "Dhaka",
      website: "govt@test.com",
      student: [
        {
          name: "kaba",
          age: 15,
          email: "kaba@gmail.com",
        },
        {
          name: "kanon",
          age: 23,
          email: "kanon@gmail.com",
        },
        {
          name: "sneha",
          age: 22,
          email: "sneha@gmail.com",
        },
      ],
    },
  ];
  return (
    <div>
      {CollageData.map((collage, index) => (
        <div key={index}>
          <Nestedcollage data={collage}/>
        </div>
      ))}
    </div>
  );
};
export default Nestedloop;
