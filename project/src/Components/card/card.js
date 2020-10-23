import React from "react";
import "./card.css";
import SetLocal from "../../Helper/setLocal";
import GetLocal from "../../Helper/getLocal";
import IconChanger from "../../Helper/iconChanger";

let arrM = GetLocal("music") !== null ? GetLocal("music") : [];
let arrMo = GetLocal("movie") !== null ? GetLocal("movie") : [];
let arrG = GetLocal("game") !== null ? GetLocal("game") : [];
let arrS = GetLocal("show") !== null ? GetLocal("show") : [];

const getImage = (type) => {
  switch (type) {
    case "music":
      return <i className="fas pad fasCard fa-play"></i>
    case "movie":
      return <i className="fas pad fasCard fa-film"></i>;
    case "show":
      return <i className="fas pad fasCard fa-tv"></i>;
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
    case "game":
      return arrG;
    default:
      break;
  }
};

const saveLocal = (name, desc, type, id) => {
  let arr = getArray(type);
  SetLocal(arr, name, desc, type, id);
};

const addDelete = (name, desc, type, id) => {
  const icon = document.getElementById(id);
  if(icon !== null) {
    if (icon.className.includes("far")) {
      saveLocal(name, desc, type, id);
    } else {
      const coll = GetLocal(type);
      if (coll !== null) {
        switch (type) {
          case "music":
            arrM = coll.filter((item) => !item.id.includes(id));
            localStorage.setItem(type, JSON.stringify(arrM));
            break;
          case "movie":
            arrMo = coll.filter((item) => !item.id.includes(id));
            localStorage.setItem(type, JSON.stringify(arrMo));
            break;
          case "game":
            arrG = coll.filter((item) => !item.id.includes(id));
            localStorage.setItem(type, JSON.stringify(arrG));
            break;
          case "show":
            arrS = coll.filter((item) => !item.id.includes(id));
            localStorage.setItem(type, JSON.stringify(arrS));
            break;
          default:
            break;
        }
      }
    }
    IconChanger(id, icon.className);
  }
};

const Card = ({ name, type, desc, id, found }) => {
  return (
    <div className="cardDiv">
      <div className="savedDiv">
        {found ? (
          <i
            className="fas fa-bookmark"
            id={id}
            onClick={() => addDelete(name, desc, type, id)}
          ></i>
        ) : (
          <i
            className="far fa-bookmark"
            id={id}
            onClick={() => addDelete(name, desc, type, id)}
          ></i>
        )}
      </div>
      <div className="logoDiv">{getImage(type)}</div>
      <span className="cardTitle">{name}</span>
    </div>
  );
};

export default Card;
