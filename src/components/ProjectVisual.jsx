// Small, theme-aware UI illustrations for each project. Purely decorative.
import { LuSend, LuFileText, LuLock } from "react-icons/lu";

function Window({ title, children, className = "" }) {
  return (
    <div className={`pv-window ${className}`}>
      <div className="pv-bar">
        <span className="pv-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="pv-title">{title}</span>
      </div>
      <div className="pv-content">{children}</div>
    </div>
  );
}

function DocuMind() {
  return (
    <Window title="documind · handbook.pdf" className="pv-chat">
      <div className="chat-doc">
        <LuFileText /> handbook.pdf <span>48 pages · indexed</span>
      </div>
      <p className="chat-msg chat-user">How long do customers have to request a refund?</p>
      <div className="chat-msg chat-ai">
        <p>
          Customers can request a refund within <b>30 days</b> of delivery, provided the item is unused.
        </p>
        <div className="chat-cites">
          <span>p. 4</span>
          <span>p. 12</span>
          <span>p. 31</span>
        </div>
      </div>
      <p className="chat-msg chat-user">Does it cover international shipping?</p>
      <div className="chat-msg chat-ai">
        <p>
          I couldn't find anything about international shipping in this document
          <span className="chat-caret" />
        </p>
        <div className="chat-cites">
          <span className="is-none">No source found</span>
        </div>
      </div>
      <div className="chat-input">
        Ask anything about this document…
        <LuSend />
      </div>
    </Window>
  );
}

const endpoints = [
  { m: "post", path: "/auth/login", note: "Issue a JWT" },
  { m: "get", path: "/calendars", note: "List calendars" },
  { m: "post", path: "/calendars/:id/events", note: "Create an event" },
  { m: "get", path: "/events?date=2024-10-23", note: "Events for a day" },
  { m: "patch", path: "/events/:id", note: "Update an event" },
  { m: "delete", path: "/events/:id", note: "Remove an event" },
];

function ReturnJourney() {
  return (
    <Window title="the-return-journey · api-docs" className="pv-api">
      <div className="api-head">
        <div>
          <b>Calendar API</b> <span>v1.0 · OAS 3</span>
        </div>
        <span className="api-auth">
          <LuLock /> Authorize
        </span>
      </div>
      <ul className="api-list">
        {endpoints.map((e) => (
          <li key={e.m + e.path} className={`api-${e.m}`}>
            <span className="api-m">{e.m}</span>
            <code>{e.path}</code>
            <span className="api-note">{e.note}</span>
          </li>
        ))}
      </ul>
    </Window>
  );
}

function Workflow() {
  const nodes = [
    { x: 24, y: 34, w: 92, label: "Start", kind: "io" },
    { x: 150, y: 34, w: 112, label: "Filter data" },
    { x: 150, y: 128, w: 112, label: "Convert format" },
    { x: 296, y: 128, w: 92, label: "POST", kind: "accent" },
    { x: 296, y: 34, w: 92, label: "End", kind: "io" },
  ];
  const edges = [
    "M116 52 C 133 52, 133 52, 150 52",
    "M206 70 C 206 98, 206 100, 206 128",
    "M262 146 C 279 146, 279 146, 296 146",
    "M342 128 C 342 100, 342 98, 342 70",
  ];
  return (
    <Window title="workflow · csv-cleanup" className="pv-flow">
      <svg viewBox="0 0 412 196" role="presentation">
        <defs>
          <pattern id="flow-dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="flow-dot" />
          </pattern>
        </defs>
        <rect width="412" height="196" fill="url(#flow-dots)" />
        {edges.map((d) => (
          <path key={d} d={d} className="flow-edge" />
        ))}
        {nodes.map((n) => (
          <g key={n.label} transform={`translate(${n.x} ${n.y})`} className={`flow-node ${n.kind ?? ""}`}>
            <rect width={n.w} height="36" rx="9" />
            <circle cx="14" cy="18" r="3.5" />
            <text x="26" y="22.5">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </Window>
  );
}

const board = [
  { col: "To do", cards: [{ w: 80, p: "low" }, { w: 60, p: "medium" }] },
  { col: "In progress", cards: [{ w: 70, p: "urgent", lifted: true }, { w: 85, p: "low" }] },
  { col: "Done", cards: [{ w: 65, p: "medium" }, { w: 50, p: "low" }, { w: 75, p: "low" }] },
];

function Crework() {
  return (
    <Window title="crework · my board" className="pv-board">
      <div className="kb">
        {board.map((c) => (
          <div key={c.col} className="kb-col">
            <p className="kb-head">
              {c.col} <span>{c.cards.length}</span>
            </p>
            {c.cards.map((card, i) => (
              <div key={i} className={`kb-card ${card.lifted ? "is-lifted" : ""}`}>
                <i style={{ width: `${card.w}%` }} />
                <i style={{ width: `${card.w - 30}%` }} />
                <span className={`kb-p kb-${card.p}`}>{card.p}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Window>
  );
}

function BabyBliss() {
  const tiles = ["#f9c6c9", "#c9e4f9", "#fbe7a1", "#cdeccd", "#e2d4f7", "#ffd9b8"];
  return (
    <Window title="babybliss · girls" className="pv-shop">
      <div className="shop-filters">
        <span className="is-on">Girls</span>
        <span>Price ↑</span>
        <span>Cotton</span>
        <span>2–4 yrs</span>
      </div>
      <div className="shop-grid">
        {tiles.map((c, i) => (
          <div key={c} className="shop-tile">
            <div className="shop-img" style={{ "--c": c }}>
              <span />
            </div>
            <i />
            <b>₹{[499, 749, 399, 899, 649, 549][i]}</b>
          </div>
        ))}
      </div>
    </Window>
  );
}

const visuals = { documind: DocuMind, returnjourney: ReturnJourney, workflow: Workflow, crework: Crework, babybliss: BabyBliss };

export default function ProjectVisual({ id }) {
  const V = visuals[id];
  return (
    <div className={`pv pv-${id}`} aria-hidden="true">
      {V && <V />}
    </div>
  );
}
