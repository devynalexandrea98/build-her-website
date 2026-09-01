# Build Her — Coaching Website

A simple, static one-page website for the Build Her coaching brand.

**Sections:** Home / What I Do → Three Pillars (Body, Mind, Income) → About Me →
Packages → Book a Consultation (Calendly + inquiry form).

## Files

- `index.html` — page content and structure
- `styles.css` — all styling
- `script.js` — mobile nav toggle + inquiry form submission

## Before you launch: 1 thing left to set up

### 1. Your Calendly link (booking calendar) — done
Wired up to `https://calendly.com/hitchedwiththeharneds/30min`.

### 2. Your inquiry form (Formspree) — done
Wired up to `https://formspree.io/f/xnpqppzr`. Formspree will email you a
confirmation link the first time someone submits the form — click it to activate.

### 3. Personal details — done
Name, story, headshot (`images/devyn-headshot.jpg`), and package pricing are all filled in.

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
