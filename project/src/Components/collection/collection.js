import React from "react";
import "./collection.css";
import List from '../list/list';

const getLocal = (colName) => {
  const musicCollection = JSON.parse(localStorage.getItem(colName));
  return musicCollection;
};

const Collection = () => {
  let music, movies, books, authors, shows, games = null;
  return (
    <div className="content">
      <div className="title">
        <h2>My collections</h2>
        <hr />
      </div>
      <div className="musicColl">
        <h3>Music</h3>
        {
          ((music = getLocal("music")),
          music !== null ? (
            <List collection={music} />
          ) : (
            <div>
              <span>This collection is empty :(</span>
            </div>
          ))
        }
      </div>
      <div className="movieColl">
        <h3>Movies</h3>
        {
          ((movies = getLocal("movie")),
          movies !== null ? (
            <List collection={movies} />
          ) : (
            <div>
              <span>This collection is empty :(</span>
            </div>
          ))
        }
      </div>
      <div className="showColl">
        <h3>Shows</h3>
        {
          ((shows = getLocal("show")),
          shows !== null ? (
            <List collection={shows} />
          ) : (
            <div>
              <span>This collection is empty :(</span>
            </div>
          ))
        }
      </div>
      <div className="bookColl">
        <h3>Books</h3>
        {
          ((books = getLocal("book")),
          books !== null ? (
           <List collection={books} />
          ) : (
            <div>
              <span>This collection is empty :(</span>
            </div>
          ))
        }
      </div>
      <div className="authorColl">
        <h3>Authors</h3>
        {
          ((authors = getLocal("author")),
          authors !== null ? (
            <List collection={authors} />
          ) : (
            <div>
              <span>This collection is empty :(</span>
            </div>
          ))
        }
      </div>
      <div className="gameColl">
        <h3>Games</h3>
        {
          ((games = getLocal("game")),
          games !== null ? (
            <List collection={games} />
          ) : (
            <div>
              <span>This collection is empty :(</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Collection;
