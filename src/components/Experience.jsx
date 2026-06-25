import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <div className="timeline">
          {experience.map((job, i) => (
            <div key={i} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <ul className="timeline__points">
                  {job.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
