import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">React Notes App</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/add'>Add Notes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/about'>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/help'>Help</NavLink>
            </li>
          </ul>
      </nav>
    )
}

export default Header;