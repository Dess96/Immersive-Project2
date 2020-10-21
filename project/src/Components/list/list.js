import React from "react";
import "./list.css";

const List = ({collection}) => {
  return (
    <ul>
      {
      collection.map((element) => (
        <li>{element.name}</li>
      ))
      }
    </ul>
  );
};

export default List;
