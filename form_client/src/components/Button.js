import React from "react";
import "../styles/button.css";
const Button = (props) => {
  const { name, className, type } = props;

  return (
    <div>
      <button className={className} type={type}>
        {name}
      </button>
    </div>
  );
};

export default Button;
