import React from "react";
import "./book.css";
import Description from "../../Components/description/description";
import GetLocal from "../../Helper/getLocal";

const Book = () => {
  return (
    <div>
      <Description
        title={"Books"}
        description={"These are the books that you have saved"}
      />
      {GetLocal("book") ? (
        <div className="content">
          <ul>
            {GetLocal("book").map((item) => (
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

export default Book;
