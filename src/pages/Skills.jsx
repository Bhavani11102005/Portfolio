import "./Skills.css";

const groups = [
  ["Programming", ["Java", "Python", "JavaScript", "TypeScript", "C"]],
  ["Backend & Web", ["Spring Boot", "JDBC", "REST APIs", "Node.js", "Express.js", "React", "HTML", "CSS"]],
  ["AI / ML", ["Machine Learning", "Deep Learning", "Computer Vision", "OpenCV", "TensorFlow / Keras", "CNN", "LSTM", "VGG16 / VGG19"]],
  ["Database & Tools", ["SQL", "MySQL", "MongoDB", "Git", "GitHub", "Postman", "VS Code"]],
];

export default function Skills() {
  return (
    <section className="page-shell skills-page">
      <div className="section-kicker">Toolkit</div>
      <h1 className="section-title">Skills I use to <span>build.</span></h1>
      <p className="section-subtitle">A practical mix of programming, full-stack development, databases, and AI/ML technologies.</p>

      <div className="skills-groups">
        {groups.map(([title, skills]) => (
          <article className="skill-group glass-card" key={title}>
            <div className="skill-group-title"><span className="skill-number">0{groups.findIndex((g) => g[0] === title) + 1}</span><h2>{title}</h2></div>
            <div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
