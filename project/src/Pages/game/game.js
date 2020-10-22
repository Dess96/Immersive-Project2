import React from "react";
import "./game.css";
import Description from "../../Components/description/description";
import GetLocal from "../../Helper/getLocal";

const Game = () => {
  return (
    <div>
      <Description
        title={"Games"}
        description={"These are the games that you have saved"}
      />
      {GetLocal("game") ? (
        <div className="content">
          <ul>
            {GetLocal("game").map((item) => (
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

export default Game;
