import { useState } from "react";
import { LuArrowUpRight, LuCopy, LuCheck, LuSend, LuLoaderCircle } from "react-icons/lu";
import { profile, socials } from "../data";
import { useCopy } from "../hooks";
import { socialIcons } from "./Icons";
import "./Contact.css";

function ContactForm() {
  // idle | sending | sent | error
  const [state, setState] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="form-card form-done" role="status">
        <span className="form-done-icon">
          <LuCheck aria-hidden="true" />
        </span>
        <h3>Message sent — thank you!</h3>
        <p>I'll get back to you at the address you left. Talk soon.</p>
        <button className="btn btn-ghost btn-sm" onClick={() => setState("idle")}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} data-reveal style={{ "--d": 1 }}>
      <div className="field-row">
        <label className="field">
          <span>Name</span>
          <input name="name" autoComplete="name" required placeholder="Jane Doe" />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required placeholder="jane@company.com" />
        </label>
      </div>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows="5" required placeholder="Tell me about the role, project or idea…" />
      </label>
      {/* Honeypot for spam bots — getform drops submissions that fill it. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

      <div className="form-foot">
        <p className={`form-msg ${state === "error" ? "is-error" : ""}`} role="alert" aria-live="polite">
          {state === "error" && (
            <>
              Something went wrong. Please email me directly at{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </>
          )}
        </p>
        <button className="btn btn-primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? (
            <>
              Sending <LuLoaderCircle className="spin" aria-hidden="true" />
            </>
          ) : (
            <>
              Send message <LuSend aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  const [copied, copy] = useCopy();

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <header className="section-head" data-reveal>
            <p className="eyebrow">
              <span className="num">05</span> Contact
            </p>
            <h2 className="h2 contact-title">
              Have something in mind? <span className="serif accent">Let's talk.</span>
            </h2>
            <p className="lede">
              Whether it's a full-time role, a freelance project or just a hello — my inbox is open and I
              read every message.
            </p>
          </header>

          <div className="email-row" data-reveal>
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button
              className="icon-btn"
              onClick={() => copy(profile.email)}
              aria-label={copied ? "Email copied" : "Copy email address"}
              title={copied ? "Copied!" : "Copy"}
            >
              {copied ? <LuCheck /> : <LuCopy />}
            </button>
            <span className="copy-toast" role="status" aria-live="polite">
              {copied ? "Copied to clipboard" : ""}
            </span>
          </div>

          <ul className="contact-socials" data-reveal>
            {socials
              .filter((s) => s.id !== "email")
              .map((s) => {
                const Icon = socialIcons[s.id];
                return (
                  <li key={s.id}>
                    <a href={s.href} target="_blank" rel="noreferrer">
                      <Icon aria-hidden="true" />
                      <span className="cs-label">{s.label}</span>
                      <span className="cs-handle">{s.handle}</span>
                      <LuArrowUpRight className="cs-arrow" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
