import React from "react";
import "./collection.css";
import List from "../list/list";
import CollError from "../collError/collError";

const getLocal = (colName) => {
  const musicCollection = JSON.parse(localStorage.getItem(colName));
  return musicCollection;
};

const Collection = () => {
  let music,
    movies,
    books,
    authors,
    shows,
    games = null;
  return (
    <div className="content">
      <div className="title">
        <h2>My collections</h2>
        <hr />
      </div>
      <div className="coll">
        <div className="cardDiv colls">
          <h3>Music</h3>
          {
            ((music = getLocal("music")),
            music !== null ? (
              <div>
                <List collection={music} />
                <span>More</span>
              </div>
            ) : (
              <CollError />
            ))
          }
        </div>
        <div className="cardDiv colls">
          <h3>Movies</h3>
          {
            ((movies = getLocal("movie")),
            movies !== null ? <List collection={movies} /> : <CollError />)
          }
        </div>
        <div className="cardDiv colls">
          <h3>Shows</h3>
          {
            ((shows = getLocal("show")),
            shows !== null ? <List collection={shows} /> : <CollError />)
          }
        </div>
        <div className="cardDiv colls">
          <h3>Books</h3>
          {
            ((books = getLocal("book")),
            books !== null ? <List collection={books} /> : <CollError />)
          }
        </div>
        <div className="cardDiv colls">
          <h3>Authors</h3>
          {
            ((authors = getLocal("author")),
            authors !== null ? <List collection={authors} /> : <CollError />)
          }
        </div>
        <div className="cardDiv colls">
          <h3>Games</h3>
          {
            ((games = getLocal("game")),
            games !== null ? <List collection={games} /> : <CollError />)
          }
        </div>
      </div>
    </div>
  );
};

export default Collection;
