import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">Technologies I work with across the data stack.</p>
        <div className="skills__grid">
          {skills.map((group, i) => (
            <div key={i} className="skill-group">
              <h3 className="skill-group__category">{group.category}</h3>
              <div className="skill-group__items">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
