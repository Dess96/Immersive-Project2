import React, { useState } from "react";
import GetSimilar from "../../Hooks/getSimilar";
import Card from "../card/card";
import "./search.css";

import { useHistory, useParams } from "react-router-dom";

const Search = () => {
  let { search } = useParams();
  const history = useHistory();
  const [inp, setInp] = useState("");
  const sim = GetSimilar(search);
  console.log(sim);

  const updateData = (event) => {
    setInp(event.target.value);
  };

  const changeURL = (inp) => {
    history.push(`/search/${inp}`);
  };

  return (
    <div className="content">
      <div className="title">
        <h2>Search for similar content</h2>
        <hr />
      </div>
      <div className="inputDiv">
        <input
          type="text"
          placeholder="Bands, movies, podcasts..."
          onKeyDown={updateData}
        />
        <button onClick={() => changeURL(inp)}>Search!</button>
      </div>
      {sim ? (
        <div className="contentDiv">
          {sim.length !== 0 ? (
            sim.map((item) => <Card name={item.Name} type={item.Type} />)
          ) : (
            <div className="errorDiv">
              <span className="errTitle">Oh no!</span>
              <p>
                That search did not return any results. Try something else.
              </p>
              <i class="fas fa-exclamation-triangle"></i>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
