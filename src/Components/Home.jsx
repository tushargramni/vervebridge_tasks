import React from "react";
import "./Home.css";
import Cartform from "./Cartform";
import Content from "./Content";
import Footer from "./footer";
const Home = () => {
  return (
    <div>
      <div className="home_header">
        <div className="data">
          <div className="header_container">
            <h1>Hair</h1>
            <p>
              Start from the top. We’ve got you covered with a range of formulas
              to keep your hair in tip-top shape and your style in mint
              condition.
            </p>
            <button className="Shampoobtn">Shop Shampoo</button>
          </div>
        </div>
      </div>
      <Cartform />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
