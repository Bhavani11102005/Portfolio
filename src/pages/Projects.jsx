import { useEffect, useState } from "react";
import "./Project.css";

const projects = [
  { n: "01", type: "Full Stack", title: "Inventory Management System", stack: "Java · React · Node.js · MySQL · REST APIs", url: "https://github.com/AnandaKrishna427/AOOP-Project", text: "A full-stack inventory platform with product management, inventory tracking, cart functionality, role-based access, CRUD operations, and database integration.", details: ["Product and inventory management", "CRUD operations and REST API integration", "Role-based access and cart functionality", "MySQL database integration"] },
  { n: "02", type: "AI / Deep Learning", title: "Image Caption Generator", stack: "Python · CNN · LSTM · Deep Learning", url: "https://github.com/Bhavani-2005/DL-Project", text: "A CNN encoder and LSTM decoder sequence-to-sequence system that generates natural-language captions from input images.", details: ["CNN-based image feature extraction", "LSTM sequence decoder", "Image-to-text generation pipeline", "Deep learning and sequence modeling"] },
  { n: "03", type: "Computer Vision", title: "Face Emotion Detection", stack: "Python · CNN · VGG16/VGG19 · Transfer Learning", url: "https://github.com/Bhavani-2005/Face_emotion_detection", text: "A real-time facial emotion recognition system using CNN-based classification and VGG transfer learning for multiple facial expressions.", details: ["Real-time facial expression recognition", "CNN image classification", "VGG16/VGG19 transfer learning", "Computer vision preprocessing"] },
  { n: "04", type: "Computer Vision", title: "Drowsiness Detection System", stack: "Python · OpenCV · Dlib", url: "https://github.com/Hasmitha06/VRSU", text: "A real-time driver fatigue detection system using facial landmarks and eye-aspect-ratio analysis from live video.", details: ["Live video frame processing", "Dlib facial landmark detection", "Eye-aspect-ratio analysis", "Real-time fatigue alerting"] },
  { n: "05", type: "Full Stack", title: "Daily Expense Tracker", stack: "React · TypeScript · REST APIs · Chart.js", url: "https://github.com/AnandaKrishna427/FSD-Project", text: "A responsive expense management application with authentication, categorization, dashboard analytics, validation, and multi-user tracking.", details: ["User authentication and multi-user tracking", "Expense categorization", "Dashboard analytics and Chart.js", "REST API synchronization"] },
  { n: "06", type: "Java / Database", title: "Student Grade Management", stack: "Java · JDBC · MySQL · OOP", url: "https://github.com/Bhavani11102005/Student-grade-management", text: "A database-driven Java application supporting CRUD operations and academic record management with JDBC and MySQL.", details: ["Student academic record management", "Java and JDBC database connectivity", "MySQL CRUD operations", "Object-oriented application design"] },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event) => event.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="page-shell projects-page">
      <div className="section-kicker">Selected work</div>
      <h1 className="section-title">Projects that show how I <span>build.</span></h1>
      <p className="section-subtitle">A selection across full-stack engineering, Java development, and applied AI/computer vision.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card glass-card" key={project.title}>
            <div className="project-top"><span>{project.n}</span><small>{project.type}</small></div>
            <h2>{project.title}</h2>
            <p>{project.text}</p>
            <div className="project-stack">{project.stack.split(" · ").map((item) => <span key={item}>{item}</span>)}</div>
            <div className="project-actions">
              <button type="button" className="project-arrow" onClick={() => setSelected(project)} aria-label={`View details for ${project.title}`}>
                View details <span>↗</span>
              </button>
              <a className="project-github" href={project.url} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div className="project-modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <div className="project-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details">×</button>
            <div className="section-kicker">{selected.type}</div>
            <h2 id="project-modal-title">{selected.title}</h2>
            <p>{selected.text}</p>
            <h3>What I built</h3>
            <ul>{selected.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <div className="modal-stack">{selected.stack.split(" · ").map((item) => <span key={item}>{item}</span>)}</div>
            <div className="modal-actions">
              <a className="primary-btn" href={selected.url} target="_blank" rel="noreferrer">Open GitHub ↗</a>
              <button type="button" className="secondary-btn modal-done" onClick={() => setSelected(null)}>Close details</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
