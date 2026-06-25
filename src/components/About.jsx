import { personal, education } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__grid">
          <div className="about__text">
            <p>{personal.bio}</p>
            <p>
              I'm currently based in <strong>{personal.location}</strong> and open
              to data engineering roles, consulting, and collaboration on
              interesting data infrastructure challenges.
            </p>
          </div>
          <div className="about__education">
            <h3>Education</h3>
            {education.map((e, i) => (
              <div key={i} className="edu-card">
                <p className="edu-card__degree">{e.degree}</p>
                <p className="edu-card__school">{e.school}</p>
                {e.note && <p className="edu-card__note">{e.note}</p>}
                <p className="edu-card__period">{e.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
