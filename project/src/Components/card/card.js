import React from "react";
import "./card.css";

const getImage = (type) => {
    switch (type) {
        case "music":
          return <i className="fas fa-music"></i>;
        case "movie":
            return <i className="fas fa-film"></i>;
        case "show":
            return <i className="fas fa-tv"></i>;
        case "podcast":
            return <i className="fas fa-headphones-alt"></i>;
        case "book":
            return <i className="fas fa-book"></i>;
        case "author":
            return <i className="fas fa-address-book"></i>;
        case "game":
            return <i className="fas fa-gamepad"></i>;
      }
};

const Card = ({ name, type }) => {
    return (
    <div className="cardDiv">
      <span>{name}</span>
      <span>{getImage(type)}</span>
    </div>
  );
};

export default Card;
