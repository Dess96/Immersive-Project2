import React from "react";
import "./header.css";
import Home from "../home/home";
import Search from "../search/search";
import Collection from "../collection/collection";
import Music from "../../Pages/music/music";
import Movie from '../../Pages/movie/movie';
import Game from '../../Pages/game/game';
import Show from '../../Pages/show/show';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <Router>
      <header>
        <nav className="navbar">
          <ul>
            <li className="navItem">
              <i className="fas pad fa-user-astronaut"></i>
              <Link to="/">
                <span className="navText">Home</span>
              </Link>
            </li>
            <li className="navItem">
              <i className="fas pad fa-meteor"></i>
              <Link to="/search/:search">
                <span className="navText">Search</span>
              </Link>
            </li>
            <li className="navItem">
              <i className="fas pad fa-rocket"></i>
              <Link to="/collections">
                <span className="navText">Collections</span>
              </Link>
            </li>
            <li className="navItem">
              <i className="fas pad fa-moon"></i>
              <Link to="/friends">
                <span className="navText">Friends</span>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/show">
            <Show />
          </Route>
          <Route path="/search/:search">
            <Search />
          </Route>
          <Route path="/collections">
            <Collection />
          </Route>
          <Route path="/friends">
            
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </Router>
  );
};

export default Header;
