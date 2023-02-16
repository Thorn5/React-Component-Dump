import React, { useState, useEffect } from "react";

const ArrayComponent = () => {
  const [selectedMethod, setSelectedMethod] = useState("id");

  return (
    <div>
      <PresentArray
        arrayData={ArrayData}
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
    </div>
  );
};

export default ArrayComponent;

const PresentArray = ({ arrayData, selectedMethod, setSelectedMethod }) => {
  const [selectedOption, setSelectedOption] = useState("1");
  const [options, setOptions] = useState([]);

  const selectedStudent = arrayData.find(
    (student) =>
      student.id === selectedOption ||
      student.firstName === selectedOption ||
      student.surname === selectedOption
  );

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
    setOptions([]);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    let optionsArr = [];
    arrayData.forEach((student) => {
      if (selectedMethod === "id") {
        optionsArr.push(student.id);
      } else if (selectedMethod === "firstName") {
        optionsArr.push(student.firstName);
      } else {
        optionsArr.push(student.surname);
      }
    });
    setOptions(optionsArr);
  }, [selectedMethod]);

  return (
    <div>
      <div>
        <input
          type="radio"
          name="method"
          value="id"
          checked={selectedMethod === "id"}
          onChange={handleMethodChange}
        />
        <label>Select by ID</label>
        <input
          type="radio"
          name="method"
          value="firstName"
          checked={selectedMethod === "firstName"}
          onChange={handleMethodChange}
        />
        <label>Select by First Name</label>
        <input
          type="radio"
          name="method"
          value="surname"
          checked={selectedMethod === "surname"}
          onChange={handleMethodChange}
        />
        <label>Select by Surname</label>
      </div>
      <select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      {selectedStudent && (
        <p>
          {selectedStudent.firstName} {selectedStudent.surname} - Enrolled:{" "}
          {selectedStudent.enrolled ? "Yes" : "No"}
        </p>
      )}
    </div>
  );
};

const ArrayData = [
  {
    id: "1",
    firstName: "Andre",
    surname: "Giant",
    enrolled: true,
  },
  {
    id: "2",
    firstName: "Pete",
    surname: "Cat",
    enrolled: true,
  },
  {
    id: "3",
    firstName: "Joe",
    surname: "Blogs",
    enrolled: false,
  },
  {
    id: "4",
    firstName: "Sam",
    surname: "Gamgee",
    enrolled: true,
  },
  {
    id: "5",
    firstName: "Frodo",
    surname: "Baggins",
    enrolled: false,
  },
  {
    id: "6",
    firstName: "John",
    surname: "Doe",
    enrolled: true,
  },
  {
    id: "7",
    firstName: "Jane",
    surname: "Doe",
    enrolled: false,
  },
  {
    id: "8",
    firstName: "Bob",
    surname: "Smith",
    enrolled: true,
  },
  {
    id: "9",
    firstName: "Alice",
    surname: "Johnson",
    enrolled: false,
  },
  {
    id: "10",
    firstName: "Charlie",
    surname: "Brown",
    enrolled: true,
  },
  {
    id: "11",
    firstName: "David",
    surname: "Jones",
    enrolled: false,
  },
  {
    id: "12",
    firstName: "Emily",
    surname: "Miller",
    enrolled: true,
  },
  {
    id: "13",
    firstName: "Michael",
    surname: "Davis",
    enrolled: false,
  },
  {
    id: "14",
    firstName: "Jessica",
    surname: "Garcia",
    enrolled: true,
  },
  {
    id: "15",
    firstName: "James",
    surname: "Martinez",
    enrolled: false,
  },
  {
    id: "16",
    firstName: "Emily",
    surname: "Anderson",
    enrolled: true,
  },
  {
    id: "17",
    firstName: "Madison",
    surname: "Taylor",
    enrolled: false,
  },
  {
    id: "18",
    firstName: "Matthew",
    surname: "Thomas",
    enrolled: true,
  },
  {
    id: "19",
    firstName: "Daniel",
    surname: "Hernandez",
    enrolled: false,
  },
  {
    id: "20",
    firstName: "Elizabeth",
    surname: "Moore",
    enrolled: true,
  },
  {
    id: "21",
    firstName: "Ashley",
    surname: "Martin",
    enrolled: false,
  },
  {
    id: "22",
    firstName: "Brian",
    surname: "Jackson",
    enrolled: true,
  },
  {
    id: "23",
    firstName: "Emily",
    surname: "Thompson",
    enrolled: false,
  },
  {
    id: "24",
    firstName: "Megan",
    surname: "White",
    enrolled: true,
  },
  {
    id: "25",
    firstName: "Hannah",
    surname: "Harris",
    enrolled: false,
  },
  {
    id: "26",
    firstName: "Jacob",
    surname: "Clark",
    enrolled: true,
  },
  {
    id: "27",
    firstName: "Nicholas",
    surname: "Lewis",
    enrolled: false,
  },
  {
    id: "28",
    firstName: "Julia",
    surname: "Robinson",
    enrolled: true,
  },
  {
    id: "29",
    firstName: "Ethan",
    surname: "Walker",
    enrolled: false,
  },
  {
    id: "30",
    firstName: "Sophia",
    surname: "Perez",
    enrolled: true,
  },
  {
    id: "31",
    firstName: "Madison",
    surname: "Hall",
    enrolled: false,
  },
  {
    id: "32",
    firstName: "Alex",
    surname: "Young",
    enrolled: true,
  },
];
