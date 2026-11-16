import { portfolioData } from "../data/portfolioData.js";

function ProjectLink({ href, children }) {
  if (!href) {
    return (
      <span className="project-link project-link--pending" aria-disabled="true">
        {children} <span aria-hidden="true">↗</span>
        <span className="sr-only"> — tautan akan ditambahkan</span>
      </span>
    );
  }

  return (
    <a
      className="project-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function ProjectsSection() {
  return (
    <section className="section projects-section" id="proyek">
      <div className="page-shell">
        <div className="section-heading-row projects-heading">
          <div>
            <div className="section-label">
              <span className="section-index">03 /</span>
              <span>Karya pilihan</span>
            </div>
            <h2 className="section-title">
              Ide yang menjadi
              <br />
              <em>sesuatu yang nyata.</em>
            </h2>
          </div>
          <p className="section-aside">
            Beberapa proyek yang berangkat dari kebutuhan pengguna dan
            tantangan di dunia nyata.
          </p>
        </div>
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <article
              className={`project-card ${project.theme}`}
              key={project.number}
            >
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-art" aria-hidden="true">
                <span className="project-art-orbit project-art-orbit--one" />
                <span className="project-art-orbit project-art-orbit--two" />
                <span className="project-art-center">
                  {project.number === "01" ? "TA" : project.number}
                </span>
                <span className="project-art-cross">✳</span>
              </div>
              <div className="project-content">
                <p className="project-subtitle">{project.subtitle || "Project"}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-solution">{project.solution}</p>
                <ul className="project-tags" aria-label="Teknologi yang digunakan">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <ProjectLink href={project.demoUrl}>Live Demo</ProjectLink>
                  <ProjectLink href={project.repositoryUrl}>
                    GitHub Repo
                  </ProjectLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
