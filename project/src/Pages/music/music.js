import React from "react";
import "./music.css";
import Description from "../../Components/description/description";
import GetLocal from "../../Helper/getLocal";

const Music = () => {
  return (
    <div>
      <Description
        title={"Music"}
        description={"These are the bands that you have saved"}
      />
      {GetLocal("music") ? (
        <div className="content">
          <ul>
            {GetLocal("music").map((item) => (
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

export default Music;
