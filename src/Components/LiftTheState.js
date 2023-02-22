import React, { useState } from "react";

const LiftTheState = () => {
  const [message_Props, setMessage_Props] = useState("props");
  const [message_Named, setMessage_Named] = useState("named variable");

  const handleChange_Props = (e) => {
    setMessage_Props(e.target.value);
  };

  const handleChange_Named = (e) => {
    setMessage_Named(e.target.value);
  };

  return (
    <form>
      <span>passed as props: </span>
      <input 
      type="text" 
      // value={message_Props} 
      placeholder={message_Props} 
      onChange={handleChange_Props} 
      />
      <Child_Props message={message_Props} />
      <br />
      <span>passed as named variable: </span>
      <input 
      type="text" 
      // value={message_Named} 
      placeholder={message_Named} 
      onChange={handleChange_Named} 
      />
      <Child_Named message={message_Named} />
    </form>
  );
};

export default LiftTheState;

const Child_Props = (props) => {
  return <div>{props.message}</div>;
};

const Child_Named = ({ message }) => {
  return <div>{message}</div>;
};
