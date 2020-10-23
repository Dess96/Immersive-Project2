import React from "react";
import "./description.css";

const Description = ({title, description}) => {
  return (
    <div className="content">
      <div className="title">
        <h2 className="descTitle">{title}</h2>
        <hr />
      </div>
      <p className="descP">
        {description}
      </p>
    </div>
  );
};

export default Description;
