import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Router
          </a>
        </div>
        <ul className="nav navbar-nav">
          <Link to="/">
            <li className="active home">Home</li>
          </Link>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/signin">
              <span className="glyphicon glyphicon-user" /> Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
