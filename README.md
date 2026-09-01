# Build Her — Coaching Website

A simple, static one-page website for the Build Her coaching brand.

**Sections:** Home / What I Do → Three Pillars (Body, Mind, Income) → About Me →
Packages → Book a Consultation (Calendly + inquiry form).

## Files

- `index.html` — page content and structure
- `styles.css` — all styling
- `script.js` — mobile nav toggle + inquiry form submission

## Before you launch: 3 things to set up

### 1. Your Calendly link (booking calendar)
1. Create a free account at [calendly.com](https://calendly.com) and set up your
   "consultation call" event type.
2. In `index.html`, find `YOUR-CALENDLY-LINK` (appears twice, in the "Book a Free
   Consultation" section) and replace it with your real link, e.g.
   `https://calendly.com/yourname/consultation`.

### 2. Your inquiry form (Formspree)
1. Create a free account at [formspree.io](https://formspree.io) and create a new form.
2. Copy the form endpoint it gives you (looks like `https://formspree.io/f/xxxxxxxx`).
3. In `index.html`, find `YOUR-FORM-ID` in the `<form action="...">` line and replace
   the whole URL with your endpoint.

### 3. Personal details
Search `index.html` for text in `[brackets]` and replace with your own info:
- `[Your Name]` and your personal story in the **About Me** section
- Photo: swap the "Your Photo Here" placeholder `<div>` for an `<img>` tag once you
  have a headshot
- Pricing in the **Packages** section note

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
