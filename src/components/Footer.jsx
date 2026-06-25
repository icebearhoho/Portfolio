import { personal } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Built with React · {new Date().getFullYear()} · {personal.name}
        </p>
        <div className="footer__links">
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
