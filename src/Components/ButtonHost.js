import React, { useState } from "react";

const ButtonHost = () => {
  const [buttonName, setButtonName] = useState("My Button");
  const [showAlert, setShowAlert] = useState(false);
  const [showNumOnButton, setShowNumOnButton] = useState(false);

  return (
    <div>
      <SetButtonParameters
        buttonName={buttonName}
        setButtonName={setButtonName}
        setShowAlert={setShowAlert}
        setShowNumOnButton={setShowNumOnButton}
      />
      <DisplayButton
        buttonName={buttonName}
        showAlert={showAlert}
        showNumOnButton={showNumOnButton}
      />
    </div>
  );
};

export default ButtonHost;

const SetButtonParameters = (props) => {
  const handleNameChange = (event) => {
    props.setButtonName(event.target.value);
  };

  const handleSetShowCheck = (event) => {
    props.setShowAlert(event.target.checked);
  };

  const handleShowClicksOnButton = (event) => {
    props.setShowNumOnButton(event.target.checked);
  };

  return (
    <form>
      <label>
        Button Text:
        <input
          type="text"
          // value={props.buttonName}
          placeholder={props.buttonName}
          onChange={handleNameChange}
        />
      </label>
      <br />
      <label>
        Show Alert:
        <input
          type="checkbox"
          checked={props.showAlert}
          onChange={handleSetShowCheck}
        />
      </label>
      <br />
      <label>
        Show Clicks on Button:
        <input
          type="checkbox"
          checked={props.showNumOnButton} //?needed???
          onChange={handleShowClicksOnButton}
        />
      </label>
    </form>
  );
};

const DisplayButton = (props) => {
  const [clickCount, setClickCount] = useState(0);
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    if (props.showAlert) {
      console.log(props.buttonName, clickCount + 1);
      alert(props.buttonName);
    } else {
      console.log(props.buttonName, clickCount + 1);
    }
  };

  return (
    <button onClick={handleButtonClick}>
      {props.buttonName}
      {props.showNumOnButton ? `: ${clickCount}` : ""}
    </button>
  );
};



