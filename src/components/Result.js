import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../assets/bg.png";

function Result() {
  const location = useLocation();
  const allAnswers = location.state?.answers || [];
  const allQuestions = location.state?.questions || [];

  let percentile = 0;

  allAnswers.forEach((item) => {
    if (item.trueAnswer) {
      percentile += 1;
    }
  });

  const score = allQuestions.length ? Math.round((percentile / allQuestions.length) * 100) : 0;
  const scoreLabel =
    score >= 80 ? "Excellent!" : score >= 60 ? "Great job!" : score >= 40 ? "Nice try!" : "Keep practicing!";

  return (
    <div className="result">
      <div className="result-box">
        <div className="result-bg">
          <div className="result-score">
            <span className="percentile">{score}%</span>
            <p>{scoreLabel}</p>
          </div>
          <img src={Image} alt="result illustration" />
        </div>
        <div className="result-summary">
          <p className="result-detail">
            You answered {percentile} out of {allQuestions.length} questions correctly.
          </p>
          <p className="result-tip">
            Keep going - each round makes your vocabulary stronger.
          </p>
        </div>
        <Link to="/" className="new-quiz">
          Start a new quiz
        </Link>
      </div>

      <h2 className="check-answers-title">Review your answers</h2>
      <div className="check-answers-boxes">
        {allQuestions.map((item, key) => {
          const userAnswer = allAnswers[key] || { answer: "No answer", trueAnswer: false };

          return (
            <div
              key={key}
              className={userAnswer.trueAnswer ? "check-answer-box correct" : "check-answer-box wrong"}
            >
              <div className="check-answer-top">
                <div className="check-texts">
                  <p className="check-answer-count">Question {key + 1}</p>
                  <h3 className="check-answer-question">{item.question}</h3>
                </div>
                <div className="check-icon">
                  <i className={userAnswer.trueAnswer ? "bi bi-check" : "bi bi-x"}></i>
                </div>
              </div>
              <div className="check-answer-bottom">
                <div className="answer-box">
                  <span className="answer-title">Your Answer</span>
                  <span className="answer-text">{userAnswer.answer}</span>
                </div>
                <div className="answer-box">
                  <span className="answer-title">Correct Answer</span>
                  <span className="answer-text">
                    {item.answers.map((ans) => (ans.trueAnswer ? ans.answer : null))}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Result;
