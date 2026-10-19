# rationalprabal.github.io

Personal portfolio of **Prabal Kumar Dwivedi**, full-stack engineer. Live at <https://rationalprabal.github.io>.

Built with React 19 and Vite, with hand-written CSS (no UI framework). Light and dark themes, a ⌘K command menu, and scroll-reveal motion that respects `prefers-reduced-motion`.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

> Vite 8 needs Node 20.19+ or 22.12+. If `npm install` fails with
> `Cannot read properties of null (reading 'edgesOut')`, you're on an older npm. Run `npx npm@11 install` instead.

## Edit content

Everything you see on the page lives in [`src/data.js`](src/data.js): profile, links, about text, experience, projects, archive and skills. Components only handle layout.

| Setting                      | What it does                                                    |
| ---------------------------- | --------------------------------------------------------------- |
| `profile.status`             | Green "open to…" pill in the hero. Set to `null` to hide it.    |
| `profile.resume`             | Résumé link (Google Drive) used by every résumé button.         |
| `profile.formEndpoint`       | getform.io endpoint for the contact form.                       |
| `profile.showGitHubActivity` | Shows the GitHub contribution graph under Skills.               |
| `projects[].featured`        | Makes a project the full-width lead card.                       |

Each project's illustration is a small CSS/SVG mock in [`src/components/ProjectVisual.jsx`](src/components/ProjectVisual.jsx), keyed by project `id`. A new project needs a matching entry there, or it renders an empty tinted panel.

## Deploy

GitHub Pages serves the `gh-pages` branch:

```bash
npm run deploy    # builds, then pushes dist/ to gh-pages
```

## Structure

```
index.html              meta / Open Graph / no-flash theme script
public/                 favicon, og.png, apple-touch-icon
src/
  data.js               all site content
  hooks.js              theme, reveal, active-section, clock, spotlight, copy
  styles/global.css     design tokens, base styles, buttons, utilities
  components/           one .jsx + .css per section
```
