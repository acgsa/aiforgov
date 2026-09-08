# AI for GOV — Wireframe

Static wireframe/prototype for an "AI for GOV" concept site (U.S. Department of Commerce).

Copy is built around the National AI Center's positioning: *the U.S. government's gateway
for AI — open in both directions, connecting builders, buyers, and government. A place for
expertise, and a catalyst for deals.*

**Live preview:** https://acgsa.github.io/aiforgov/

## Contents

| Path | Description |
| --- | --- |
| `index.html` | Single-page markup |
| `styles.css` | Page styles |
| `script.js` | Hero rotator + interactions |
| `_assets/usds/globals.css` | USDS design token / global styles |
| `_assets/usds/us_flag_small.svg` | USG ribbon flag |
| `_assets/seal.png` | Department of Commerce seal |
| `_assets/Instrument_Serif/` | Bundled Instrument Serif webfont (OFL) |
| `.nojekyll` | Disables Jekyll so `_assets/` is published by GitHub Pages |

## Local development

No build step or dependencies — it's plain HTML/CSS/JS. Serve the folder with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

GitHub Pages is served from the `main` branch root. Any push to `main` republishes the site.

## Notes

This is an unofficial design wireframe and is not an official U.S. government website.

Instrument Serif is licensed under the SIL Open Font License (see `_assets/Instrument_Serif/OFL.txt`).
