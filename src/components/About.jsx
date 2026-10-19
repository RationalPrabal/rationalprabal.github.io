import { about } from "../data";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <header className="section-head about-head" data-reveal>
          <p className="eyebrow">
            <span className="num">01</span> About
          </p>
          <h2 className="h2">
            Engineer by training, <span className="serif accent">builder</span> by habit.
          </h2>
        </header>

        <div className="about-body">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "about-lead" : undefined} data-reveal style={{ "--d": i }}>
              {p}
            </p>
          ))}

          <dl className="stats" data-reveal>
            {about.stats.map((s) => (
              <div key={s.label} className="stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
