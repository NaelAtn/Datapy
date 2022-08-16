import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "./DATAPY.png";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="datapy" className="logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/nos-cours"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Nos programmes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Qui sommes-nous ?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contactez-nous"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contactez-nous
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
