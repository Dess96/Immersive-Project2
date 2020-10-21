import React from "react";
import "./list.css";

const List = ({collection}) => {
  return (
    <ul>
      {
      collection.slice(0, 5).map((element) => (
        <li>{element.name}</li>
      ))
      }
    </ul>
  );
};

export default List;
