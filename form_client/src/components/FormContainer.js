import React from "react";
import "../styles/form.css";
import ImageHolder from "./ImageHolder";
import Form from "./Form";
import image from "../images/illustration.jpeg";
function FormContainer() {
  return (
    <div className="Form">
      <ImageHolder image={image} className="image" />
      <Form />
    </div>
  );
}

export default FormContainer;
