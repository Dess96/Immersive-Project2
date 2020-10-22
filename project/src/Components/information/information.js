import React from "react";
import "./information.css";
import Description from "../../Components/description/description";
import GetLocal from "../../Helper/getLocal";

  
const deleteItem = (coll, type, id) => {
  console.log(coll, type, id);
  let arr = [];
  arr = coll.filter((item) => !item.id.includes(id));
  localStorage.setItem(type, JSON.stringify(arr));
};


const Information = ({coll, title}) => {
  let collection = GetLocal(coll);
  console.log(collection);
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
                {item.name} <span onClick={() => deleteItem(collection, coll, item.id)}>Delete item</span><br/>
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
