import React from "react";
import "./button.css";
const Button = ({ onClick, text, backgroundColor }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
};
export default Button;
