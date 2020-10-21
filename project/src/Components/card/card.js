import React from "react";
import "./card.css";
import SetLocal from '../../Helper/setLocal';
let arrM = [];
let arrMo = [];
let arrG = [];
let arrA = [];
let arrB = [];
let arrS = [];

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
    default:
      return <i className="fas fa-question"></i>;
  }
};

const saveLocal = (name, desc, type) => {
  switch (type) {
    case "music":
      SetLocal(arrM, name, desc, type);
      break;
    case "movie":
      SetLocal(arrMo, name, desc, type);
      break;
    case "show":
      SetLocal(arrS, name, desc, type);
      break;
    case "book":
      SetLocal(arrB, name, desc, type);
      break;
    case "author":
      SetLocal(arrA, name, desc, type);
      break;
    case "game":
      SetLocal(arrG, name, desc, type);
      break;
    default:
      break;
  }
}

const Card = ({ name, type, desc }) => {
  return (
      <div className="cardDiv" onClick={() => saveLocal(name, desc, type)}>
        <div className="logoDiv">{getImage(type)}</div>
        <span className="cardTitle">{name}</span>
      </div>
  );
};

export default Card;
