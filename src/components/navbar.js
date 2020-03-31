import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <div className="nav-wrapper">
            <img src={logo} height="60" alt="logo" />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/globalinfo">Global Information </Link>
              </li>
              <li>
                <Link to="/search"> Search City </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
