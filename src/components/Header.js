import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">React Notes App</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Add Notes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Help</a>
            </li>
          </ul>
      </nav>
    )
}

export default Header;