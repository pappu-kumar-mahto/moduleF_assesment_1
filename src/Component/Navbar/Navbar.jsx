import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="explore details">
        <sapn>Explore</sapn>
      </div>
      <div className="navMenu">
        <NavLink to="/home">
          <span>Home</span>
        </NavLink>
        <NavLink to="/place">
          <span>Place</span>
        </NavLink>
        <NavLink to="/video">
          <span>Video</span>
        </NavLink>
        <NavLink to="/locations">
          <span>Locations</span>
        </NavLink>
        <NavLink to="/about">
          <span>About</span>
        </NavLink>
        <NavLink to="/book">
          <span>Book</span>
        </NavLink>
        <NavLink to="/photo">
          <span>Photos</span>
        </NavLink>
      </div>
      <div className="learnMore details">
        <span>Learn More</span>
      </div>
    </div>
  );
};

export default Navbar;
