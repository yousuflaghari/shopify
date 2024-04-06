import React from "react";
import "./input.css";

const Input = ({ placeholder, onChange }) => {
  return (
    <div className="input-div">
      <input className="input" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default Input;
