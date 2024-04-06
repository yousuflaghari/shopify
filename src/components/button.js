import React from "react";
import "./button.css";
const Button = ({ onClick, text, backgroundColor, color }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {text}
    </button>
  );
};
export default Button;
