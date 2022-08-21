import React from "react";
import "./Home.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
const Home = () => {
  return (
    <div className="home">
      <div className="icon">
        <ApartmentIcon />
      </div>
      <h1>Visit New York</h1>
      <h3>Express yourself and explore</h3>
    </div>
  );
};

export default Home;
