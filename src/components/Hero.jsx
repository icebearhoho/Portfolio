import { personal } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">{personal.name}</h1>
        <h2 className="hero__title">{personal.title}</h2>
        <p className="hero__tagline">{personal.tagline}</p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn--outline">
            GitHub
          </a>
        </div>
        <div className="hero__socials">
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="divider">·</span>
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
          <span className="divider">·</span>
          <span>{personal.location}</span>
        </div>
      </div>
      <div className="hero__bg-code" aria-hidden="true">
        {`def pipeline(source):\n  extract(source)\n  .transform()\n  .load(dwh)`}
      </div>
    </section>
  );
}
