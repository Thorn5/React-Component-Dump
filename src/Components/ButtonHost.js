import React, { useState } from "react";

const ButtonHost = () => {
  const [buttonName, setButtonName] = useState("My Button");
  const [showAlert, setShowAlert] = useState(false);
  const [addNumber, setAddNumber] = useState(false);

  const handleNameChange = (name) => {
    setButtonName(name);
  };

  const handleCheckboxChange = (isChecked) => {
    setShowAlert(isChecked);
  };

  const handleAddNumberChange = (isChecked) => {
    setAddNumber(isChecked);
  };

  const handleButtonClick = () => {
    if (showAlert) {
      console.log(buttonName);
      alert(buttonName);
    } else {
      console.log(buttonName);
    }
  };

  return (
    <div>
      <SetButtonParameters
        onNameChange={handleNameChange}
        onCheckboxChange={handleCheckboxChange}
        onAddNumberChange={handleAddNumberChange}
      />
      <Button
        name={buttonName}
        onClick={handleButtonClick}
        addNumber={addNumber}
      />
    </div>
  );
};

export default ButtonHost;


const SetButtonParameters = (props) => {
  const [buttonName, setButtonName] = useState("My Button");
  const [showAlert, setShowAlert] = useState(false);
  const [addNumber, setAddNumber] = useState(false);

  const handleNameChange = (event) => {
    setButtonName(event.target.value);
    props.onNameChange(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setShowAlert(event.target.checked);
    props.onCheckboxChange(event.target.checked);
  };

  const handleAddNumberChange = (event) => {
    setAddNumber(event.target.checked);
    props.onAddNumberChange(event.target.checked);
  };

  return (
    <form>
      <label>
        Button Text:
        <input type="text" value={buttonName} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Show Alert:
        <input
          type="checkbox"
          checked={showAlert}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label>
        Show Clicks on Button:
        <input
          type="checkbox"
          checked={addNumber}
          onChange={handleAddNumberChange}
        />
      </label>
    </form>
  );
};

const Button = (props) => {
  const [number, setNumber] = useState(0);
  const handleButtonClick = () => {
    setNumber(number + 1);
    props.onClick();
  };
  return (
    <button onClick={handleButtonClick}>
      {props.name}
      {props.addNumber ? `: ${number}` : ""}
    </button>
  );
};