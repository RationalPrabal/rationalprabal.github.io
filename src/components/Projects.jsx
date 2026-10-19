import { LuArrowUpRight } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { projects, archive, profile } from "../data";
import ProjectVisual from "./ProjectVisual";
import "./Projects.css";
import "./ProjectVisual.css";

function ProjectLinks({ links, title }) {
  return (
    <div className="proj-links">
      {links.live && (
        <a className="btn btn-primary btn-sm" href={links.live} target="_blank" rel="noreferrer">
          Live site <LuArrowUpRight aria-hidden="true" />
          <span className="sr-only"> for {title}</span>
        </a>
      )}
      {links.code && (
        <a className="btn btn-ghost btn-sm" href={links.code} target="_blank" rel="noreferrer">
          <SiGithub aria-hidden="true" /> Source
          <span className="sr-only"> code for {title}</span>
        </a>
      )}
    </div>
  );
}

function ProjectCard({ p, index }) {
  return (
    <article
      className={`proj spotlight ${p.featured ? "proj-featured" : ""}`}
      data-reveal
      style={{ "--d": index % 2 }}
    >
      <ProjectVisual id={p.id} />
      <div className="proj-body">
        <p className="proj-meta">
          <span>{p.year}</span>
          <span aria-hidden="true">/</span>
          <span>{p.kind}</span>
          {p.featured && <span className="proj-flag">Latest</span>}
        </p>
        <h3 className="proj-title">{p.title}</h3>
        <p className="proj-tagline">{p.tagline}</p>
        <p className="proj-desc">{p.description}</p>
        <ul className="proj-stack" aria-label="Built with">
          {p.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <ProjectLinks links={p.links} title={p.title} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <header className="section-head work-head" data-reveal>
          <p className="eyebrow">
            <span className="num">03</span> Selected work
          </p>
          <div className="work-head-row">
            <h2 className="h2">
              Things I've <span className="serif accent">designed, built</span> &amp; shipped.
            </h2>
            <p className="work-head-note">
              From AI document search to visual data pipelines — each one built end to end, API to interface.
            </p>
          </div>
        </header>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <div className="archive" data-reveal>
          <div className="archive-head">
            <h3>More from the archive</h3>
            <a
              className="archive-all"
              href={`https://github.com/${profile.githubUser}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              All repositories <LuArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <ul className="archive-list">
            {archive.map((a) => (
              <li key={a.title}>
                <a href={a.href} target="_blank" rel="noreferrer">
                  <span className="ar-year">{a.year}</span>
                  <span className="ar-title">{a.title}</span>
                  <span className="ar-note">{a.note}</span>
                  <span className="ar-stack">{a.stack}</span>
                  <LuArrowUpRight className="ar-arrow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
