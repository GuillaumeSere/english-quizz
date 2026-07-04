import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/english-quiz-hero.png";

function Home() {
  const levels = [
    {
      name: "A1",
      label: "Starter",
      description: "Basic words for first conversations",
      path: "/quiz/A1",
    },
    {
      name: "A2",
      label: "Elementary",
      description: "Everyday vocabulary and simple actions",
      path: "/quiz/A2",
    },
    {
      name: "B1",
      label: "Intermediate",
      description: "Practical expressions for daily situations",
      path: "/quiz/B1",
    },
    {
      name: "B2",
      label: "Upper intermediate",
      description: "More precise words for confident communication",
      path: "/quiz/B2",
    },
    {
      name: "C1",
      label: "Advanced",
      description: "Nuanced vocabulary for complex topics",
      path: "/quiz/C1",
    },
    {
      name: "C2",
      label: "Mastery",
      description: "Challenging words for expert fluency",
      path: "/quiz/C2",
    },
  ];

  return (
    <div className="home">
      <section className="intro-box">
        <div className="intro-texts">
          <span className="intro-badge">English practice</span>
          <h1 className="intro-title">English Vocabulary Quizzes</h1>
          <p className="intro-description">
            Train your English vocabulary level by level, from first words to
            advanced meanings.
          </p>
          <div className="intro-features">
            <span className="feature-chip">
              <i className="bi bi-list-check"></i> 20 questions
            </span>
            <span className="feature-chip">
              <i className="bi bi-clock-history"></i> 30s per question
            </span>
          </div>
          <Link className="intro-cta" to="/quiz/A1">
            <span>Start with A1</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="intro-media" aria-hidden="true">
          <img src={HeroImage} alt="" />
        </div>
      </section>

      <div className="section-heading">
        <span>Choose your level</span>
        <h2>Pick the quiz that matches your goal</h2>
      </div>

      <section className="level-boxes">
        {levels.map((level) => (
          <article className="level-box" key={level.name}>
            <div className="level-header">
              <span className="level-badge">{level.label}</span>
              <span className="level-meta">
                <i className="bi bi-stopwatch"></i> 10 min
              </span>
            </div>
            <div className="level-text">
              <h2 className="level-name">{level.name}</h2>
              <p className="level-description">{level.description}</p>
            </div>
            <Link className="level-link" to={level.path}>
              <span>Start {level.name}</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Home;
