import React from "react";
import "./options.css";
import List from "../list/list";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Options = ({ collection, input }) => {
  const history = useHistory();

  const changeURL = (inp) => {
    history.push(`/${inp}`);
  };

  const deleteCollection = (collection) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete the whole collection',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      background: '#000',
      customClass: 'swal-wide'
   }).then((result) => {
      if(result.value){
        localStorage.removeItem(collection);
        history.go(0);
     }
   })
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
