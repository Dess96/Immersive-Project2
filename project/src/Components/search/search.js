import React, {useState} from "react";
import GetSimilar from '../../Hooks/getSimilar';
import "./search.css";

import {
  useHistory,
  useParams
} from "react-router-dom";

const Search = () => {
  let {search} = useParams();
  const history = useHistory();
  const [inp, setInp] = useState('');

    const updateData = (event) => {
        setInp(event.target.value)
    }

    const changeURL = (inp) => {
        history.push(`/search/${inp}`);
    }

  return (
    <div className="content">
      <div className="title">
        <h2>Search for similar content</h2>
        <hr />
      </div>
      <div className="inputDiv">
        <input type='text' placeholder='Bands, movies, podcasts...' onKeyDown={updateData}/>
        <button onClick={() => changeURL(inp)}>Search!</button>
      </div>
    </div>
  );
};

export default Search;
