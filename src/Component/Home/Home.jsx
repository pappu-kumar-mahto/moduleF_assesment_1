import React from "react";
import "./Home.css";
import { MdApartment } from 'react-icons/md'
const Home = () => {
  return (
    <div className="home">
      <div className="icon">
        <MdApartment size="3rem"/>
      </div>
      <h1>Visit New York</h1>
      <h3>Express yourself and explore</h3>
    </div>
  );
};

export default Home;
