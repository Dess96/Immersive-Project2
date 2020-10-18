import React from 'react';
import './header.css';
import Home from '../home/home';
import Pictures from '../pictures/pictures';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <Router>
            <header>
                <nav className="navbar">
                    <ul>
                        <li className="navItem">
                            <i className="fas fa-user-astronaut"></i>
                            <Link to="/"><span className="navText">Home</span></Link>
                        </li>
                        <li className="navItem">
                            <i className="fas fa-meteor"></i>
                            <Link to="/pictures"><span className="navText">Pictures</span></Link>
                        </li>
                        <li className="navItem">
                            <i className="fas fa-rocket"></i>
                            <Link to="/signin"><span className="navText">Sign In</span></Link>
                        </li>
                        <li className="navItem">
                            <i className="fas fa-moon"></i>
                            <Link to="/logout"><span className="navText">Logout</span></Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/pictures">
                        <Pictures />
                    </Route>
                    <Route path="/signin">
                        
                    </Route>
                    <Route path="/logout">
                        
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </header>
        </Router>
    );
}

export default Header;