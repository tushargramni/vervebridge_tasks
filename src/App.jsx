import React from 'react'
import Quiz from './Components/Quiz'
import top from "./assets/images/top.svg";
import bottom from "./assets/images/bottom.svg";
const App = () => {
  return (
    <div>
      <div className="top">
        <img src={top} alt="" />
      </div>
      <Quiz />
      <div className="bottom">
        <img src={bottom} alt="" />
      </div>
    </div>
  )
}

export default App
