import React from "react";
import "../styles/index.css";
function Index({ name, styling }) {
  return (
    <div className={styling}>
      <span>{name}</span>
    </div>
  );
}

export default Index;
