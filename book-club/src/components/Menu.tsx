import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/" className="menu-link">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/characters" className="menu-link">Characters</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Menu;