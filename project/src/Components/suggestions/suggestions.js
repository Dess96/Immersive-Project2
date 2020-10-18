import React, {useState} from "react";
import "./suggestions.css";

import {
  useHistory
} from "react-router-dom";

const Pictures = () => {
  const history = useHistory();
  const [inp, setInp] = useState('');

    const updateData = (event) => {
        setInp(event.target.value)
    }

    const changeURL = (inp) => {
        history.push(`/suggestions/${inp}`);
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

export default Pictures;
