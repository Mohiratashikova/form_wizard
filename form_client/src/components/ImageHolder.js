import React from "react";

import "../styles/image.css";
function ImageHolder({ image, className }) {
  return (
    <div>
      <img src={image} alt="colorful abstract" className={className} />
    </div>
  );
}

export default ImageHolder;
