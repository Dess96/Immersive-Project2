import React from "react";
import "./text.css";

const Text = ({text}) => {
  return (
    <div className="textDiv">
      <span className="textSize">{text}</span>
    </div>
  );
};

export default Text;
