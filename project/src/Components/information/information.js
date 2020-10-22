import React from "react";
import "./information.css";
import Description from "../../Components/description/description";
import GetLocal from "../../Helper/getLocal";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Information = ({ coll, title }) => {
  let collection = GetLocal(coll);
  const history = useHistory();

  const deleteItem = (coll, type, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this item from the collection",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      background: "#000",
    }).then((result) => {
      if (result.value) {
        let arr = [];
        arr = coll.filter((item) => !item.id.includes(id));
        localStorage.setItem(type, JSON.stringify(arr));
        history.go(0);
      }
    });
  };
  
  return (
    <div>
      <Description
        title={title}
        description={`These are the ${title} that you have saved`}
      />
      {collection ? (
        <div className="content">
          <ul>
            {collection.map((item) => (
              <li className="descriptionLi">
                {item.name}{" "}
                <span onClick={() => deleteItem(collection, coll, item.id)}>
                  Delete item
                </span>
                <br />
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Information;
