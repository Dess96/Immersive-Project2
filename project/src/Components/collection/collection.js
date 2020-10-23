import React from "react";
import "./collection.css";
import Text from "../text/text";
import Options from "../../Components/options/options";
import GetLocal from "../../Helper/getLocal";

import { useHistory } from "react-router-dom";
const emptyText = 'This collection is empty :(';

const Collection = () => {
  let music,
    movies,
    shows,
    games = null;

  return (
    <div className="content">
      <div className="title">
        <h2 className="descTitle">My collections</h2>
        <hr />
      </div>
      <div className="coll">
        <div className="cardDiv colls">
          <h3>Music</h3>
          {
            ((music = GetLocal("music")),
            (music !== null && music.length !== 0) ? (
              <Options collection={music} input={'music'}/>
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
              <Options collection={movies} input={'movie'}/>
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
              <Options collection={shows} input={'show'}/>
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
              <Options collection={games} input={'game'}/>
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
