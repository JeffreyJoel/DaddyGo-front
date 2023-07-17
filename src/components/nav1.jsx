import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="header">
        <h1 className="Name">Stripe</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <NavLink className="navbar-brand" to="#">Navbar</NavLink> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/homePage">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/news">
                  News Feed <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/home">
                  Updates
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

      </nav>
    );
  }
}

export default Nav;
