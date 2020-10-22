import React from "react";
import "./movie.css";
import Description from "../../Components/description/description";
import GetLocal from "../../Helper/getLocal";

const Movie = () => {
  return (
    <div>
      <Description
        title={"Movies"}
        description={"These are the movies that you have saved"}
      />
      {GetLocal("movie") ? (
        <div className="content">
          <ul>
            {GetLocal("movie").map((item) => (
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

export default Movie;
