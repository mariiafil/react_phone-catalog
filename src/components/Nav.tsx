import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => (
  <header className="header">
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink
            to="/"
            exact
            className="navigation__item"
            activeClassName="navigation__item--active"
          >
              Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/phones"
            activeClassName="navigation__item--active"
            className="navigation__item"
          >
              Phones
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
