import React from "react";

function Image({ imgSrc, altName }) {
  return (
    <div>
      <img src={imgSrc} alt={altName} />
    </div>
  );
}

export default Image;
