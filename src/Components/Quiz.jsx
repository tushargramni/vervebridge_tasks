// eslabelnt-disable-next-labelne no-unused-vars
import React from "react";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <form action="">
        <div className="questions">
          <h2>What is the fullform of HTML?</h2>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Hyper text markup language</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Hyper labelnk markup language</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Hyper text making language</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Hyper task machine language</label>
          </span>
        </div>
        <div className="questions">
          <h2>What is the fullform of CSS?</h2>

          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Cascading Style Sheets</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Cascasing Styling Sheets</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Cascade Sliding Sheets</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Canvas Styling Sheets</label>
          </span>
        </div>
        <div className="questions">
          <h2>What is the Latest Version of HTML?</h2>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">HTML5</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">HTML4</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">XHTML3</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">HTML1.0</label>
          </span>
        </div>
        <div className="questions">
          <h2>What is the use of html?</h2>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Html is the standard language used to create and structure content on the web.</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Html is the Structure Query language which is used to perform query on data.</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Html is not the standard language used to create and structure content on the web.</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Html is the only language that is used to build websites and web apps.</label>
          </span>
        </div>
        <div className="questions">
          <h2>What is the use of CSS?</h2>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">To perform styling on tag elements of web document, html pages</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">To perform styling on content of pdf document, word pages</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">To perform cascading effecting on slides</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">To perform animation efects on content of pdf document, word pages, slides</label>
          </span>
        </div>
        <div className="questions">
          <h2>What is the use of javascript?</h2>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Hyper text markup language</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Hyper labelnk markup language</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Hyper text making language</label>
          </span>
          <span>
            <input type="radio" name="same" />
            <label htmlFor="same">Hyper task machine language</label>
          </span>
        </div>
        
      </form>
    <button>Submit</button>
    </div>
  );
};

export default Quiz;
