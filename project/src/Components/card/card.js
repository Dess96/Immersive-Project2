import React from "react";
import "./card.css";
import SetLocal from '../../Helper/setLocal';
import GetLocal from '../../Helper/getLocal';
import IconChanger from '../../Helper/iconChanger';

let arrM = GetLocal('music') !== null ? GetLocal('music') : [];
let arrMo = GetLocal('movies') !== null ? GetLocal('movies') : [];
let arrG = GetLocal('games') !== null ? GetLocal('games') : [];
let arrA = GetLocal('authors') !== null ? GetLocal('authors') : [];
let arrB = GetLocal('books') !== null ? GetLocal('books') : [];
let arrS = GetLocal('shows') !== null ? GetLocal('shows') : [];

const getImage = (type) => {
  switch (type) {
    case "music":
      return <i className="fas pad fasCard fa-music"></i>;
    case "movie":
      return <i className="fas pad fasCard fa-film"></i>;
    case "show":
      return <i className="fas pad fasCard fa-tv"></i>;
    case "book":
      return <i className="fas pad fasCard fa-book"></i>;
    case "author":
      return <i className="fas pad fasCard fa-address-book"></i>;
    case "game":
      return <i className="fas pad fasCard fa-gamepad"></i>;
    default:
      return <i className="fas pad fa-question"></i>;
  }
};

const saveLocal = (name, desc, type, id) => {
  IconChanger(id);
  switch (type) {
    case "music":
      SetLocal(arrM, name, desc, type, id);
      break;
    case "movie":
      SetLocal(arrMo, name, desc, type, id);
      break;
    case "show":
      SetLocal(arrS, name, desc, type, id);
      break;
    case "book":
      SetLocal(arrB, name, desc, type, id);
      break;
    case "author":
      SetLocal(arrA, name, desc, type, id);
      break;
    case "game":
      SetLocal(arrG, name, desc, type, id);
      break;
    default:
      break;
  }
}

const Card = ({ name, type, desc, id }) => {
  return (
      <div className="cardDiv">
        <div className="savedDiv">
         <i className="far fa-bookmark" id={id} onClick={() => saveLocal(name, desc, type, id)}></i>
        </div>
        <div className="logoDiv">{getImage(type)}</div>
        <span className="cardTitle">{name}</span>
      </div>
  );
};

export default Card;
