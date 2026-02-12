export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Node.js", "Express", "MongoDB",
    "Git & GitHub", "REST APIs", "OOPs", "Java","DSA", "python(Basic)"
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
