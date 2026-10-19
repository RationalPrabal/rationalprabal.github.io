import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { skills, profile } from "../data";
import { useTheme } from "../hooks";
import { techIcons } from "./Icons";
import "./Skills.css";

const GitHubCalendar = lazy(() =>
  import("react-github-calendar").then((m) => ({ default: m.GitHubCalendar }))
);

const calendarTheme = {
  light: ["#ebe8e1", "#ffc9b3", "#ff9a72", "#f2683a", "#c63f12"],
  dark: ["#1e1e21", "#4a2416", "#8a3a1d", "#d65428", "#ff8a63"],
};

function Activity() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  // Only fetch contribution data once the card is near the viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="activity" ref={ref} data-reveal>
      <div className="activity-head">
        <div>
          <h3>On GitHub</h3>
          <p>Contributions over the last year.</p>
        </div>
        <a
          className="btn btn-ghost btn-sm"
          href={`https://github.com/${profile.githubUser}`}
          target="_blank"
          rel="noreferrer"
        >
          @{profile.githubUser} <LuArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="activity-cal">
        {inView ? (
          <Suspense fallback={<div className="cal-skeleton" />}>
            <GitHubCalendar
              username={profile.githubUser}
              colorScheme={theme}
              theme={calendarTheme}
              blockSize={14}
              blockMargin={4}
              blockRadius={3}
              fontSize={12}
              errorMessage="Couldn't load GitHub activity right now."
            />
          </Suspense>
        ) : (
          <div className="cal-skeleton" />
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">
            <span className="num">04</span> Skills &amp; tools
          </p>
          <h2 className="h2">
            A <span className="serif accent">full-stack</span> toolkit, used daily.
          </h2>
        </header>

        <div className="skill-grid">
          {skills.map((g, i) => (
            <div key={g.group} className="skill-card spotlight" data-reveal style={{ "--d": i }}>
              <p className="skill-index">0{i + 1}</p>
              <h3>{g.group}</h3>
              <p className="skill-blurb">{g.blurb}</p>
              <ul>
                {g.items.map((item) => {
                  const Icon = techIcons[item.icon];
                  return (
                    <li key={item.name}>
                      {Icon && <Icon aria-hidden="true" />}
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {profile.showGitHubActivity && <Activity />}
      </div>
    </section>
  );
}
