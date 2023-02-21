import React, { useState, useEffect } from "react";
import { arrayData } from "./arrayData";

const ArrayComponent = () => {
  const [selectedMethod, setSelectedMethod] = useState("id");

  return (
    <div>
      <PresentArray
        arrayData={arrayData}
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
    (student) => student.id === selectedOption ||
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
      <form>
        <input
          type="radio"
          name="method"
          value="id"
          checked={selectedMethod === "id"}
          onChange={handleMethodChange} />
        <label onClick={() => setSelectedMethod("id")}>Select by ID</label>{" "}
        <br />
        <input
          type="radio"
          name="method"
          value="firstName"
          checked={selectedMethod === "firstName"}
          onChange={handleMethodChange} />
        <label onClick={() => setSelectedMethod("firstName")}>
          Select by First Name
        </label>
        <br />
        <input
          type="radio"
          name="method"
          value="surname"
          checked={selectedMethod === "surname"}
          onChange={handleMethodChange} />
        <label onClick={() => setSelectedMethod("surname")}>
          Select by Surname
        </label>
        <br />
        <select value={selectedOption} onChange={handleOptionChange}>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </form>
      {selectedStudent && (
        <p>
          {selectedStudent.firstName} {selectedStudent.surname} - Enrolled:{" "}
          {selectedStudent.enrolled ? "Yes" : "No"}
        </p>
      )}
    </div>
  );
};
