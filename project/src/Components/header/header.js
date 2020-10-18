import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li className="navItem">
                        <i className="fas fa-user-astronaut"></i>
                        <span className="navText">Home</span>
                    </li>
                    <li className="navItem">
                        <i className="fas fa-meteor"></i>
                        <span className="navText">Login</span>
                    </li>
                    <li className="navItem">
                        <i className="fas fa-rocket"></i>
                        <span className="navText">Sign In</span>
                    </li>
                    <li className="navItem">
                        <i className="fas fa-moon"></i>
                        <span className="navText">Logout</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;