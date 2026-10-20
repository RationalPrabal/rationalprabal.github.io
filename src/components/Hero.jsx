import { LuArrowRight, LuArrowDown } from "react-icons/lu";
import { profile, socials, experience, skills } from "../data";
import { useLocalTime } from "../hooks";
import { socialIcons } from "./Icons";
import portrait from "../assets/portrait.webp";
import "./Hero.css";

const current = experience.find((e) => /present/i.test(e.period));
const ticker = skills.flatMap((g) => g.items.map((i) => i.name));

export default function Hero() {
  const time = useLocalTime(profile.timeZone);

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid-bg" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          {profile.status && (
            <p className="status-pill hero-in" style={{ "--d": 0 }}>
              <span className="status-dot" aria-hidden="true" />
              {profile.status}
            </p>
          )}

          <h1 className="hero-title">
            <span className="hero-line hero-in" style={{ "--d": 1 }}>
              I build products
            </span>{" "}
            <span className="hero-line hero-in" style={{ "--d": 2 }}>
              <span className="serif">end to end</span> — from
            </span>{" "}
            <span className="hero-line hero-in" style={{ "--d": 3 }}>
              schema to <span className="serif accent">screen.</span>
            </span>
          </h1>

          <p className="lede hero-in" style={{ "--d": 4 }}>
            I'm {profile.firstName}, a full-stack engineer working across React, Node.js and AWS. I care
            about fast APIs, resilient backends, and interfaces that hold up when things go wrong.
          </p>

          <div className="hero-ctas hero-in" style={{ "--d": 5 }}>
            <a className="btn btn-primary" href="#work">
              See selected work <LuArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>

          <ul className="hero-socials hero-in" style={{ "--d": 6 }} aria-label="Elsewhere">
            {socials.map((s) => {
              const Icon = socialIcons[s.id];
              const external = !s.href.startsWith("mailto:");
              return (
                <li key={s.id}>
                  <a
                    className="icon-btn"
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    {...(external && { target: "_blank", rel: "noreferrer" })}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="id-card spotlight hero-in" style={{ "--d": 3 }} aria-label="Profile">
          <div className="id-photo">
            <img src={portrait} alt={`Portrait of ${profile.name}`} width="800" height="1000" />
          </div>
          <div className="id-body">
            <div>
              <p className="id-name">{profile.name}</p>
              <p className="id-role">{profile.role}</p>
            </div>
            <dl className="id-meta">
              <div>
                <dt>Based in</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Local time</dt>
                <dd>
                  <time>{time}</time> {profile.timeZoneLabel}
                </dd>
              </div>
              {current && (
                <div>
                  <dt>Currently</dt>
                  <dd>{current.org.replace(/ Pvt\. Ltd\.$/, "")}</dd>
                </div>
              )}
            </dl>
          </div>
        </aside>
      </div>

      <div className="hero-foot container">
        <a href="#about" className="scroll-cue" aria-label="Scroll to About">
          <LuArrowDown aria-hidden="true" />
        </a>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((k) => (
              <span key={k}>
                {ticker.map((t) => (
                  <span key={t} className="ticker-item">
                    {t}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
