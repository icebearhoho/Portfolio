import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          A selection of data engineering projects I've built.
        </p>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-card__links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn--sm btn--outline">
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn--sm btn--primary">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
