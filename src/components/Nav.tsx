import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="nav__active">
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="nav__active">
            RESUME
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
