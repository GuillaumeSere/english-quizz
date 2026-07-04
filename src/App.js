import { useEffect, useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Error from "./components/Error";

import { Link, Routes, Route } from "react-router-dom";

function App() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  useEffect(() => {
    const toggleScrollTop = () => {
      setIsScrollTopVisible(window.scrollY > 260);
    };

    toggleScrollTop();
    window.addEventListener("scroll", toggleScrollTop, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleScrollTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app-container">
      <div className="app-shell">
        <header className="app-header">
          <Link className="brand-link" to="/" aria-label="Go to the home page">
            <span className="brand-mark">
              <i className="bi bi-translate"></i>
            </span>
            <span className="brand-copy">
              <span className="brand-title">English Quizz</span>
              <span className="brand-subtitle">A1 to C2 vocabulary</span>
            </span>
          </Link>

          <nav className="header-nav" aria-label="Main navigation">
            <Link className="header-link" to="/">
              <i className="bi bi-house-door"></i>
              <span>Home</span>
            </Link>
            <span className="header-pill">
              <i className="bi bi-stars"></i>
              <span>Practice mode</span>
            </span>
          </nav>
        </header>

        <main className="quiz-box">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:level" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>
            Copyright &copy; {new Date().getFullYear()} Guillaume SERE. All rights
            reserved.
          </p>
          <span>English vocabulary quiz</span>
        </footer>
      </div>

      <button
        type="button"
        className={
          isScrollTopVisible ? "scroll-top-btn visible" : "scroll-top-btn"
        }
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  );
}

export default App;
