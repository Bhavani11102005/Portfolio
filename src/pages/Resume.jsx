import "./Resume.css";

const resumes = [
  {
    icon: "☕",
    title: "Java / Backend",
    description: "Java, OOP, DSA, JDBC, SQL, REST APIs and MySQL",
    file: "/resumes/Bhavani-Java-Backend-Resume.pdf",
  },
  {
    icon: "🤖",
    title: "AI / ML",
    description: "Python, ML, Deep Learning, Computer Vision, TensorFlow and OpenCV",
    file: "/resumes/Bhavani-AI-ML-Resume.pdf",
  },
  {
    icon: "🌐",
    title: "Full Stack",
    description: "React, Node.js, Express, MongoDB, MySQL, REST APIs and TypeScript",
    file: "/resumes/Bhavani-Full-Stack-Resume.pdf",
  },
  {
    icon: "💻",
    title: "Software Developer",
    description: "Java backend, full stack, AI/ML, DSA, OOP and DBMS",
    file: "/resumes/Bhavani-Software-Developer-Resume.pdf",
  },
];

export default function Resume() {
  return (
    <section className="page-shell resume-page">
      <div className="section-kicker">Resume</div>
      <h1 className="section-title">Choose the resume for the <span>role.</span></h1>
      <p className="section-subtitle">
        I keep role-focused versions so recruiters can quickly see the experience most relevant to the opportunity.
      </p>

      <div className="resume-grid">
        {resumes.map((resume) => (
          <article className="resume-card glass-card" key={resume.title}>
            <div className="resume-icon">{resume.icon}</div>
            <h2>{resume.title}</h2>
            <p>{resume.description}</p>
            <div className="resume-actions">
              <a className="primary-btn" href={resume.file} target="_blank" rel="noreferrer">View Resume ↗</a>
              <a className="secondary-btn" href={resume.file} download>Download</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
