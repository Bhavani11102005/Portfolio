import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <section className="page-shell about-page">
      <div className="section-kicker">About me</div>
      <div className="about-layout">
        <div className="about-photo-wrap">
          <div className="about-photo-accent"></div>
          <img src="/profile.jpg" alt="Professional portrait of Tadimalla Bhavani" />
          <div className="about-caption"><strong>AI + Software</strong><span>Building with purpose.</span></div>
        </div>

        <div className="about-copy">
          <h1 className="section-title">Turning ideas into <span>working software.</span></h1>
          <p>
            I&apos;m Tadimalla Bhavani, a Computer Science Engineering student at K L University specializing in Artificial Intelligence &amp; Visual Intelligence.
            I enjoy working at the intersection of software development, AI, and practical problem solving.
          </p>
          <p>
            My experience spans Java backend development, full-stack applications, REST APIs, SQL, and AI/ML projects.
            I&apos;m especially interested in building reliable applications that are useful, maintainable, and easy to understand.
          </p>

          <div className="about-stats">
            <div><strong>8.56</strong><span>GPA / 10</span></div>
            <div><strong>2027</strong><span>Graduation</span></div>
            <div><strong>2</strong><span>Internships</span></div>
          </div>

          <div className="about-actions">
            <Link to="/projects" className="primary-btn">See Projects ↗</Link>
            <Link to="/contact" className="secondary-btn">Get in touch</Link>
            <Link to="/resume" className="secondary-btn">View Resumes ↗</Link>
          </div>
        </div>
      </div>

      <div className="experience-card glass-card">
        <div className="experience-heading">
          <div><div className="section-kicker">Experience</div><h2>Where I&apos;ve built things</h2></div>
          <span className="experience-note">2025 — 2026</span>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div><h3>Software Development Intern · Tech Mahindra</h3><p>May 2026 – Sep 2026</p><span>Java · Spring Boot · Angular · TypeScript · MySQL · REST APIs</span></div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div><h3>Java Developer Intern · Pratinik Infotech</h3><p>Jun 2025 – Aug 2025</p><span>Java · JDBC · MySQL · CRUD · OOP</span></div>
        </div>
      </div>
    </section>
  );
}
