import React from "react";
import "./card.css";

const getImage = (type) => {
  switch (type) {
    case "music":
      return <i className="fas fasCard fa-music"></i>;
    case "movie":
      return <i className="fas fasCard fa-film"></i>;
    case "show":
      return <i className="fas fasCard fa-tv"></i>;
    case "podcast":
      return <i className="fas fasCard fa-headphones-alt"></i>;
    case "book":
      return <i className="fas fasCard fa-book"></i>;
    case "author":
      return <i className="fas fasCard fa-address-book"></i>;
    case "game":
      return <i className="fas fasCard fa-gamepad"></i>;
  }
};

const Card = ({ name, type }) => {
  return (
    <div className="contentDiv">
      <div className="cardDiv">
        <div className="logoDiv">{getImage(type)}</div>
        <span className="cardTitle">{name}</span>
      </div>
    </div>
  );
};

export default Card;
