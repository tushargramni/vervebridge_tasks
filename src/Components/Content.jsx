import React from "react";
import imghuroonbottle from "./images/huronbottle.webp";
import "./Content.css";
const Content = () => {
  return (
    <>
      <div className="kit_container">
        <div className="img_container">
          <img className="img_kit" src={imghuroonbottle} alt="" />
        </div>
        <div className="kit_content">
          <h1 className="heading_kit">Kits.</h1>
          <p className="kit_description">
            Bundle up and save on our best combo kits for face, body, and hair.
            These thoughtful combinations have everything you need to look great
            and feel fresh, day after day. Shop kits
          </p>
          <button className="btn_kit">Shop kits</button>
        </div>
      </div>
    </>
  );
};

export default Content;
