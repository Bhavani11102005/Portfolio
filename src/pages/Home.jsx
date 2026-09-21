import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const roles = [
  "AI & ML Enthusiast",
  "Full-Stack Developer",
  "Java Developer",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 45 : 85;

    const timer = setTimeout(() => {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);

      setText(next);

      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 900);
      } else if (deleting && next === "") {
        setDeleting(false);
        setRoleIndex((value) => (value + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section className="home-page">

      <div className="hero-grid-bg"></div>
      <div className="hero-orb orb-one"></div>
      <div className="hero-orb orb-two"></div>

      <div className="page-shell hero-content">

        {/* LEFT SIDE */}
        <div className="hero-copy">

          <div className="status-pill">
            <span></span>
            Open to opportunities
          </div>

          <p className="hero-eyebrow">
            Hello, I&apos;m
          </p>

          <h1>
            Tadimalla <span>Bhavani</span>
          </h1>

          <h2>
            {text}
            <b className="cursor">|</b>
          </h2>

          <p className="hero-description">
            Computer Science Engineering student specializing in
            Artificial Intelligence &amp; Visual Intelligence,
            building practical software across Java, Python,
            full-stack development, and AI.
          </p>

          {/* HERO BUTTONS */}
          <div className="hero-actions">

            {/* Projects */}
            <Link
              to="/projects"
              className="primary-btn"
            >
              Explore My Work <span>↗</span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="secondary-btn"
            >
              Let&apos;s Connect
            </Link>

            {/* Resume */}
            <Link
              to="/resume"
              className="secondary-btn"
            >
              View Resumes ↗
            </Link>

          </div>

          <div className="hero-meta">
            <span>Java</span>
            <i>•</i>
            <span>Python</span>
            <i>•</i>
            <span>React</span>
            <i>•</i>
            <span>AI/ML</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">

          <div className="photo-glow"></div>

          <div className="photo-frame">

            <div className="photo-topline">
              <span></span>
              <span></span>
              <span></span>
              <em>bhavani.dev</em>
            </div>

            <img
              src="/profile.jpg"
              alt="Professional portrait of Tadimalla Bhavani"
            />

          </div>

          <div className="floating-card card-top">
            <strong>2027</strong>
            <span>Graduate</span>
          </div>

          <div className="floating-card card-bottom">
            <strong>8.56</strong>
            <span>GPA / 10</span>
          </div>

        </div>
      </div>

      {/* Scroll */}
      <button
        type="button"
        className="scroll-cue"
        onClick={() =>
          document
            .getElementById("home-next")
            ?.scrollIntoView({
              behavior: "smooth",
            })
        }
      >
        <span></span>
        Scroll to explore
      </button>

      <div
        id="home-next"
        className="home-next-anchor"
        aria-hidden="true"
      ></div>

    </section>
  );
}