import React from "react";
import "./show.css";
import Description from "../../Components/description/description";
import GetLocal from "../../Helper/getLocal";

const Show = () => {
  return (
    <div>
      <Description
        title={"Shows"}
        description={"These are the shows that you have saved"}
      />
      {GetLocal("show") ? (
        <div className="content">
          <ul>
            {GetLocal("show").map((item) => (
              <li className="descriptionLi">
                {item.name} <br/>
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

export default Show;
