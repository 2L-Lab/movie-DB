import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/favoris"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Mes Coups de coeur</li>
          </NavLink>
        </ul>
      </nav>
      <h1>The Movie DB</h1>
    </div>
  );
};

export default Header;
