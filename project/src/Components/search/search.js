import React, { useState } from "react";
import GetSimilar from "../../Hooks/getSimilar";
import Card from "../card/card";
import "./search.css";
import Swal from "sweetalert2";

import { useHistory, useParams } from "react-router-dom";

const Search = () => {
  let { search } = useParams();
  const history = useHistory();
  const [inp, setInp] = useState("");
  let sim = GetSimilar(search);

  const updateData = (event) => {
    setInp(event.target.value);
  };

  const changeURL = (inp) => {
    if (inp === "") {
      Swal.fire({
        title: "Invalid Search",
        text: "Please use a valid search term.",
        icon: "warning",
        confirmButtonText: "Ok",
        background: "#000",
        customClass: "swal-wide",
      }).then((result) => {
        if (result.value) {
          history.go(0);
        }
      });
    } else {
      history.push(`/search/${inp}`);
      history.go(0);
    }
  };

  return (
    <div className="content longDiv">
      <div className="title">
        <h2 className="descTitle">Search</h2>
        <hr />
      </div>
      <div className="inputDiv">
        <input
          type="text"
          placeholder="Bands, movies, shows..."
          onChange={updateData}
        />
        <button onClick={() => changeURL(inp)}>Search!</button>
      </div>
      {sim ? (
        <div className="contentDiv">
          {sim.map((item, index) =>
            item.Type !== "" ? (
              <Card
                name={item.Name}
                type={item.Type}
                desc={item.wTeaser}
                id={item.yID}
                found={item.found}
                key={item.yID}
              />
            ) : (
              <div className="loadingDiv" key={index}>
                <div className="lds-roller">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
