// eslabelnt-disable-next-labelne no-unused-vars
import React, { useRef, useState } from "react";
import "./Quiz.css";
import { ques } from "../assets/question/questions";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(ques[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const next = () => {
    if (lock) {
      if (index === ques.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setQuestions(ques[index + 1]);
      setLock(false);
      optionArray.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let optionArray = [option1, option2, option3, option4];

  const reset = () => {
    setIndex(0);
    setQuestions(ques[0]);
    setLock(false);
    setScore(0);
    setResult(false);
    optionArray.forEach((option) => {
      option.current.classList.remove("wrong");
      option.current.classList.remove("correct");
    });
  };

  const checkAns = (e, ans) => {
    if (!lock) {
      if (questions.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        optionArray[questions.ans - 1].current.classList.add("correct");
      }
    }
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {!result ? (
        <>
          <h2>
            {index + 1}.&nbsp;{questions.question}
          </h2>
          <ul className="questions">
            <li ref={option1} onClick={(e) => checkAns(e, 1)}>
              {questions.option1}
            </li>
            <li ref={option2} onClick={(e) => checkAns(e, 2)}>
              {questions.option2}
            </li>
            <li ref={option3} onClick={(e) => checkAns(e, 3)}>
              {questions.option3}
            </li>
            <li ref={option4} onClick={(e) => checkAns(e, 4)}>
              {questions.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} &nbsp;of&nbsp;&nbsp;{ques.length}&nbsp;&nbsp;questions
          </div>
        </>
      ) : (
        <>
          <div className="score">
            You scored {score} out of {ques.length}
          </div>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Quiz;
