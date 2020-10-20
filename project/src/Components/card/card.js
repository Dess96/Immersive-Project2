import React from "react";
import "./card.css";

const getImage = (type) => {
    switch (type) {
        case "music":
          return 'music';
        case "movie":
            return 'movie';
        case "show":
            return 'show';
        case "podcast":
            return 'podcast';
        case "book":
            return 'book';
        case "author":
            return 'author';
        case "game":
            return 'game';
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
