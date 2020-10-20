import React from "react";
import "./card.css";

let arr = [];

const getImage = (type) => {
  switch (type) {
    case "music":
      return <i className="fas fasCard fa-music"></i>;
    case "movie":
      return <i className="fas fasCard fa-film"></i>;
    case "show":
      return <i className="fas fasCard fa-tv"></i>;
    case "book":
      return <i className="fas fasCard fa-book"></i>;
    case "author":
      return <i className="fas fasCard fa-address-book"></i>;
    case "game":
      return <i className="fas fasCard fa-gamepad"></i>;
  }
};

const saveLocal = (name, desc) => {
  arr.push({name: name, description: desc});
  var str = JSON.stringify(arr);
  localStorage.setItem('music', str);
}

const Card = ({ name, type, desc }) => {
  return (
      <div className="cardDiv" onClick={() => saveLocal(name, desc)}>
        <div className="logoDiv">{getImage(type)}</div>
        <span className="cardTitle">{name}</span>
      </div>
  );
};

export default Card;
