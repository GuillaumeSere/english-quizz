import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useQuizContext } from "../context/QuizContext";
import { useNavigate, useParams } from "react-router-dom";
import FocusImage from "../assets/quiz-focus.png";

function Quiz() {
  const { level } = useParams();
  const navigate = useNavigate();

  const { questions, currentQuestion, setCurrentQuestion } = useQuizContext();

  const [isNextButton, setIsNextButton] = useState(false);
  const [isResultButton, setIsResultButton] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [time, setTime] = useState(30);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [isResult, setIsResult] = useState(false);

  const currentQuestions = useMemo(() => questions[level] || [], [questions, level]);
  const selectedStatus = selectedIndex === null ? "No answer selected" : "Answer selected";

  const selectAnswer = (index) => {
    if (currentQuestion === currentQuestions.length - 1) {
      setIsNextButton(false);
      setIsResultButton(true);
    } else {
      setIsNextButton(true);
    }
    setSelectedIndex(index);
  };

  const addAnswer = useCallback(
    (index) => {
      const selectedAnswer =
        index !== null
          ? currentQuestions[currentQuestion].answers[index]
          : {
              answer: "Time is up",
              trueAnswer: false,
            };

      setSelectedAnswers((answers) => [...answers, selectedAnswer]);
    },
    [currentQuestion, currentQuestions]
  );

  const nextQuestion = useCallback((index) => {
    if (currentQuestion >= currentQuestions.length - 1) {
      addAnswer(index);
      setCurrentQuestion(0);
      setSelectedIndex(null);
      setIsResult(true);
    } else {
      setTime(30);
      setIsNextButton(false);
      setIsResultButton(false);
      addAnswer(index);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedIndex(null);
    }
  }, [addAnswer, currentQuestion, currentQuestions.length, setCurrentQuestion]);

  useEffect(() => {
    if (isResult) return;

    if (time < 0) {
      nextQuestion(null);
      return;
    }

    const timer = window.setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [time, isResult, nextQuestion]);

  useEffect(() => {
    setIsErrorMessage(time <= 5 && time >= 0);
  }, [time]);

  useEffect(() => {
    if (!isResult) return;
    navigate("/result", {
      state: {
        answers: selectedAnswers,
        questions: currentQuestions,
      },
    });
  }, [isResult, navigate, selectedAnswers, currentQuestions]);

  if (!currentQuestions.length || isResult) {
    return null;
  }

  return (
    <div className="quiz-screen">
      <div className="progress-box">
        <div className="progress-main">
          <div className="progress-top">
            <div className="progress-texts">
              <span className="level-chip">Level {level}</span>
              <h2 className="progress-title">Quiz progress</h2>
              <p className="progress-description">
                {currentQuestions.length} vocabulary questions with a 30 second
                timer.
              </p>
            </div>
            <div className="progress-icon">
              <i className="bi bi-bar-chart"></i>
            </div>
          </div>
          <div className="progress-bottom">
            <div
              className="progress-circle"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{
                "--value": ((currentQuestion + 1) / currentQuestions.length) * 100,
              }}
            >
              <span className="progress-big">{currentQuestion + 1}</span>
              <span className="progress-mini">/{currentQuestions.length}</span>
            </div>
            <p className="progress-detail">
              Question {currentQuestion + 1} of {currentQuestions.length}
            </p>
          </div>
        </div>
        <div className="quiz-visual" aria-hidden="true">
          <img src={FocusImage} alt="" />
        </div>
      </div>

      <div className="question-card">
        <div className="question-text">
          <h2 className="question-label">English word</h2>
          <h3 className="question">{currentQuestions[currentQuestion].question}</h3>
        </div>
        <div
          className="timer-pill"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ "--value": (time / 30) * 100 }}
        >
          <span>{time}</span>
          <small>sec</small>
        </div>
      </div>

      <div className="answer-heading">
        <div>
          <span className="answer-kicker">Answer choices</span>
          <h2>Choose the French meaning</h2>
        </div>
        <span
          className={
            selectedIndex === null
              ? "selection-status"
              : "selection-status selected"
          }
        >
          {selectedStatus}
        </span>
      </div>

      <div className="answers-boxes">
        {currentQuestions[currentQuestion].answers.map((answer, index) => {
          return (
            <button
              onClick={() => selectAnswer(index)}
              key={index}
              type="button"
              className={
                selectedIndex === index ? "answer-label selected" : "answer-label"
              }
            >
              <span>{answer.answer}</span>
              <span className="option-dot"></span>
            </button>
          );
        })}
      </div>

      {isNextButton ? (
        <div className="next">
          <button
            onClick={() => nextQuestion(selectedIndex)}
            type="button"
            className="next-btn"
          >
            Next Question
            <div className="icon">
              <i className="bi bi-arrow-right"></i>
            </div>
          </button>
        </div>
      ) : null}

      {isResultButton ? (
        <div className="next">
          <button
            onClick={() => nextQuestion(selectedIndex)}
            type="button"
            className="next-btn result-btn"
          >
            See Results
            <div className="icon">
              <i className="bi bi-bar-chart"></i>
            </div>
          </button>
        </div>
      ) : null}

      {isErrorMessage ? (
        <div className="message animation">
          <div className="icon">
            <i className="bi bi-exclamation-triangle"></i>
          </div>
          <span>You must hurry up!</span>
        </div>
      ) : null}
    </div>
  );
}

export default Quiz;
