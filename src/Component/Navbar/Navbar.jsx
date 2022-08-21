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
        <NavLink className="navItem" to="/">
          <span>Home</span>
        </NavLink>
        <NavLink className="navItem" to="/places">
          <span>Place</span>
        </NavLink>
        <NavLink className="navItem" to="/video">
          <span>Video</span>
        </NavLink>
        <NavLink className="navItem" to="/locations">
          <span>Locations</span>
        </NavLink>
        <NavLink className="navItem" to="/about">
          <span>About</span>
        </NavLink>
        <NavLink className="navItem" to="/photo">
          <span>Photos</span>
        </NavLink>
        <NavLink className="navItem" to="/book">
          <span>Book</span>
        </NavLink>
      </div>
      <div className="learnMore details">
        <span>Learn More</span>
      </div>
    </div>
  );
};

export default Navbar;
