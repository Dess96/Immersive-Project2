import React from "react";
import "./description.css";

const Description = ({title, description}) => {
  return (
    <div className="content">
      <div className="title">
        <h2>{title}</h2>
        <hr />
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Description;
