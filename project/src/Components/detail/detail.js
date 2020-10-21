import React from "react";
import "./detail.css";

const Detail = ({collection}) => {
  return (
    <ul>
      {
      collection.slice(0, 5).map((element) => (
        <li key={element.yID}>{element.name}</li>
      ))
      }
    </ul>
  );
};

export default List;
