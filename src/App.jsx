import React from 'react'
import Quiz from './Components/Quiz'
import top from "./assets/images/top.svg";
import bottom from "./assets/images/bottom.svg";
const App = () => {
  return (
    <div className="Container">
      <div className="wave-container">
        <img src={top} alt="" className="animated-svg" />
      </div>
      <Quiz />
      <div className="wave-container">
        <img src={bottom} alt="" className="animated-svg" />
      </div>
    </div>
  );
}

export default App
