import React from "react";
import "./options.css";
import List from "../list/list";
import { useHistory } from "react-router-dom";

const Options = ({ collection, input }) => {
    
const history = useHistory();


    const changeURL = (inp) => {
        history.push(`/${inp}`);
      };
    
      const deleteCollection = (collection) => {
        localStorage.removeItem(collection);
      };

  return (
    <div className="optionsDiv">
      <List collection={collection} />
      <span onClick={() => changeURL(input)}>More</span>
      <span onClick={() => deleteCollection(input)}>Delete</span>
    </div>
  );
};

export default Options;
