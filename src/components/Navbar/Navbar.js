import React from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/tours" className="nav-link">
            tours
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link active">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
