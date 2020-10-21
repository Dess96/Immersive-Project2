import React from "react";
import "./card.css";
import SetLocal from '../../Helper/setLocal';
import GetLocal from '../../Helper/getLocal';
import IconChanger from '../../Helper/iconChanger';

let arrM = GetLocal('music') !== null ? GetLocal('music') : [];
let arrMo = GetLocal('movie') !== null ? GetLocal('movie') : [];
let arrG = GetLocal('game') !== null ? GetLocal('game') : [];
let arrA = GetLocal('author') !== null ? GetLocal('author') : [];
let arrB = GetLocal('book') !== null ? GetLocal('book') : [];
let arrS = GetLocal('show') !== null ? GetLocal('show') : [];

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
      return;
  }
};

const getArray = (type) => {
  switch (type) {
    case "music":
      return arrM;
    case "movie":
      return arrMo;
    case "show":
      return arrS;
    case "book":
      return arrB;
    case "author":
      return arrA;
    case "game":
      return arrG;
    default:
      break;
  }
}

const saveLocal = (name, desc, type, id) => {
  IconChanger(id);
  let arr = getArray(type);
  SetLocal(arr, name, desc, type, id);
}

const addDelete = (name, desc, type, id) => {
  const icon = document.getElementById(id);
  if(icon.className.includes('far')) {
    icon.classList.add('fas');
    icon.classList.remove('far');
    saveLocal(name, desc, type, id);
  } else {
    const coll = GetLocal(type);
    icon.classList.add('far');
    icon.classList.remove('fas');
    arrM = coll.filter(item => !(item.id.includes(id)));
    localStorage.setItem('music', JSON.stringify(arrM));
  }
}

const Card = ({ name, type, desc, id }) => {
  return (
      <div className="cardDiv">
        <div className="savedDiv">
         <i className="far fa-bookmark" id={id} onClick={() => addDelete(name, desc, type, id)}></i>
        </div>
        <div className="logoDiv">{getImage(type)}</div>
        <span className="cardTitle">{name}</span>
      </div>
  );
};

export default Card;
