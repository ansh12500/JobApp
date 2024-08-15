import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Jobs</Link>
      <Link to="/bookmarks" className="nav-link">Bookmarks</Link>
    </nav>
  );
};

export default Navbar;
