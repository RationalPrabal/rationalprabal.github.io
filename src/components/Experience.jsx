import { experience } from "../data";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">
            <span className="num">02</span> Experience
          </p>
          <h2 className="h2">
            Where I've <span className="serif accent">learned</span> &amp; shipped.
          </h2>
        </header>

        <ol className="timeline">
          {experience.map((job, i) => {
            const current = /present/i.test(job.period);
            return (
              <li key={job.org} className={`tl-item ${current ? "is-current" : ""}`} data-reveal style={{ "--d": i }}>
                <div className="tl-when">
                  <span className="tl-period">{job.period}</span>
                  <span className="tl-place">{job.place}</span>
                </div>
                <div className="tl-marker" aria-hidden="true" />
                <div className="tl-body">
                  <h3 className="tl-role">
                    {job.role}
                    <span className="tl-at"> · {job.org}</span>
                  </h3>
                  <p className="tl-summary">{job.summary}</p>
                  <ul className="tl-tags" aria-label="Highlights">
                    {job.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
