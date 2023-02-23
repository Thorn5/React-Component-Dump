import React, { useState, useEffect } from "react";
import StudentData from "../ApiData/StudentData";

const ArrayComponent = () => {
  // Declare state variable that will hold the array of data
  const [arrayData, setArrayData] = useState([]);

  // Use useEffect hook to fetch array data
  useEffect(() => {
    setArrayData(StudentData);
  }, []);

  // Map over arrayData and render the result
  const renderArrayData = arrayData.map((item) => {
    // console.log(item);
    return (
      <div key={item.id}>
        Name: {item.firstName} {item.surname} - Enrolled:{" "}
        {item.enrolled ? "Yes" : "No"}
      </div>
    );
  });

  // console.log(renderArrayData[5].props.children[3]);

  return <div>{renderArrayData}</div>;
};

export default ArrayComponent;