import React from "react";
import "./styles.css";

function Button({ children, ...props }) {
  return (
    <button className="Button" {...props}>
      {children}
    </button>
  );
}

export default Button;
