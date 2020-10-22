import React from "react";
import "./collection.css";
import List from "../list/list";
import Text from "../text/text";
import GetLocal from "../../Helper/getLocal";

import { useHistory } from "react-router-dom";
const emptyText = 'This collection is empty :(';

const Collection = () => {
  let music,
    movies,
    books,
    authors,
    shows,
    games = null;

  const history = useHistory();

  const changeURL = (inp) => {
    history.push(`/${inp}`);
  };

  const deleteCollection = (collection) => {
    localStorage.removeItem(collection);
  };

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
            ((music = GetLocal("music")),
            (music !== null && music.length !== 0) ? (
              <div>
                <List collection={music} />
                <span onClick={() => changeURL("music")}>More</span>
                <span onClick={() => deleteCollection('music')}>Delete</span>
              </div>
            ) : (
              <Text text={emptyText} />
            ))
          }
        </div>
        <div className="cardDiv colls">
          <h3>Movies</h3>
          {
            ((movies = GetLocal("movie")),
            (movies !== null && movies.length !== 0) ? (
              <div>
                <List collection={movies} /> <span>More</span>
              </div>
            ) : (
              <Text text={emptyText} />
            ))
          }
        </div>
        <div className="cardDiv colls">
          <h3>Shows</h3>
          {
            ((shows = GetLocal("show")),
            (shows !== null && shows.length !== 0) ? (
              <div>
                <List collection={shows} /> <span>More</span>
              </div>
            ) : (
              <Text text={emptyText} />
            ))
          }
        </div>
        <div className="cardDiv colls">
          <h3>Books</h3>
          {
            ((books = GetLocal("book")),
            (books !== null && books.length !== 0) ? (
              <div>
                <List collection={books} /> <span>More</span>{" "}
              </div>
            ) : (
              <Text text={emptyText} />
            ))
          }
        </div>
        <div className="cardDiv colls">
          <h3>Authors</h3>
          {
            ((authors = GetLocal("author")),
            (authors !== null && authors.length !== 0) ? (
              <div>
                <List collection={authors} /> <span>More</span>
              </div>
            ) : (
              <Text text={emptyText} />
            ))
          }
        </div>
        <div className="cardDiv colls">
          <h3>Games</h3>
          {
            ((games = GetLocal("game")),
            (games !== null && games.length !== 0) ? (
              <div>
                <List collection={games} />
                <span>More</span>
              </div>
            ) : (
              <Text text={emptyText} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Collection;
