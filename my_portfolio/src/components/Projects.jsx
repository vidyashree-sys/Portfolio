export default function Projects() {
  const projects = [
    {
      name: "Make My Stay",
      description: "A web application for planning and booking stays with ease.",
      link: " https://make-my-stay.onrender.com"
    },

    {
      name: "VitalDrop",
      description: "AI-powered blood supply management platform for faster emergency response.",
      link: " https://vitaldrop-83nr.onrender.com"
    },

    {
      name: "Event Scheduler Web App",
      description: "A platform to schedule, manage, and register for events easily.",
      link: "https://github.com/vidyashree-sys/event-management-platform"
    },

    
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} className="project-link">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
