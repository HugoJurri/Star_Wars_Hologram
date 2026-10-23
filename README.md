# Holocron — The Galactic Handbook

A fan-made, in-universe handbook to the Star Wars galaxy.

## Run it locally

Double-click `index.html`, or serve the folder (recommended):

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Publish on GitHub Pages

The site is plain HTML/CSS/JS with relative paths and hash-based routing (`#/galaxy`), so it works on GitHub Pages as-is — no build step. `.nojekyll` tells Pages to serve the files untouched.

One-time setup:

1. Create an empty repository on GitHub (for example `holocron`). Don't add a README or licence.
2. In this folder:
   ```bash
   git init -b main
   git add .
   git commit -m "Holocron v1"
   git remote add origin https://github.com/<your-username>/holocron.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/holocron/`.

After that, every `git push` updates the live site.

`Info/` (the research notes) is excluded via `.gitignore`. Remove that line if you want the notes in the repository too — note they'd then be publicly visible.

## Structure

| Path | What it holds |
|---|---|
| `index.html` | App shell — nav, search palette, drawer, script tags |
| `css/style.css` | The whole design system (tokens at the top) |
| `js/core.js` | Router, starfield + hyperspace warp, search, opening crawl, helpers |
| `js/data/*.js` | All content, as plain data — edit these to add or fix lore |
| `js/views/*.js` | One file per section; each has `render()` and optional `mount()` / `focus()` |
| `Info/` | Original research notes the content is based on (not published) |

## Adding content

- **A character:** add to `SW.characters` in `js/data/characters.js`. `species`, `home` and `aff` link automatically when they match a species, planet or faction id; `rel` entries link when they match another character id.
- **Species depth:** add or extend an entry in `SW.speciesDetail` (`js/data/species-detail.js`), keyed by the species id.
- **A planet:** add to `SW.planets` in `js/data/galaxy.js` (`grid` = galactic grid square, e.g. `'R16'`).
- **A ship or weapon:** add to `SW.arsenal` in `js/data/arsenal.js`. Give it a `len` (metres) for the scale chart.
- **A timeline event:** add to the `events` array of an era in `js/data/lore.js`. Set `legends: true` for non-canon.
- Everything added to the data files automatically appears in search (Ctrl K).

## Adding a section

1. Create `js/views/<name>.js` registering `SW.views.<name> = { title, render(sub, params), mount(root) }`.
2. Add a route to `SW.routes` in `js/core.js`.
3. Add the `<script>` tag in `index.html`.
