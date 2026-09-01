# Build Her — Coaching Website

A simple, static one-page website for the Build Her coaching brand.

**Sections:** Home / What I Do → Three Pillars (Body, Mind, Income) → About Me →
Packages → Book a Consultation (Calendly + inquiry form).

## Files

- `index.html` — page content and structure
- `styles.css` — all styling
- `script.js` — mobile nav toggle + inquiry form submission

## Before you launch: 1 thing left to set up

### Lifestyle Intensive travel radius
In `index.html`, search for `[X]` in the "What's a Lifestyle Intensive?" callout (near
the Packages section) and replace it with your actual local travel radius in miles.

### Everything else — done
- Calendly, wired up to `https://calendly.com/hitchedwiththeharneds/30min`
- Formspree inquiry form, wired up to `https://formspree.io/f/xnpqppzr` (it'll email
  you a confirmation link the first time someone submits the form — click it to activate)
- Name, story, headshot (`images/devyn-headshot.jpg`), and package pricing

## Running it locally

No build step needed — it's plain HTML/CSS/JS. Just open `index.html` in a browser,
or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This is a static site, so it can be hosted for free on any of:
- [Netlify](https://netlify.com) (drag-and-drop the folder, or connect this repo)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
