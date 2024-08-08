import React from "react";
import Quiz from "./Components/Quiz";
import top from "./assets/images/top.svg";
import bottom from "./assets/images/bottom.svg";
const App = () => {
  return (
    <div className="Container">
      <div className="wave-container">
        <div className="anim-1">
          <img src={top} alt="" className="animated-svg" />
          <img src={top} alt="" className="animated-svg" />
          <img src={top} alt="" className="animated-svg" />
        </div>
      </div>
      <Quiz />

      <div className="wave-container">
        <div className="anim-2">
          <img src={bottom} alt="" className="animated-svg" />
          <img src={bottom} alt="" className="animated-svg" />
          <img src={bottom} alt="" className="animated-svg" />
        </div>
      </div>
    </div>
  );
};

export default App;
