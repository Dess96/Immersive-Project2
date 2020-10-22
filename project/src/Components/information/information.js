import React from "react";
import "./information.css";
import Description from "../../Components/description/description";
import GetLocal from "../../Helper/getLocal";


const Information = ({coll, title}) => {
  return (
    <div>
      <Description
        title={title}
        description={`These are the ${title} that you have saved`}
      />
      {GetLocal(coll) ? (
        <div className="content">
          <ul>
            {GetLocal(coll).map((item) => (
              <li className="descriptionLi">
                {item.name} <span>Delete item</span><br/>
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
