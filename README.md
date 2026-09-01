# Build Her — Coaching Website

A simple, static one-page website for the Build Her coaching brand.

**Sections:** Home / What I Do → Three Pillars (Body, Mind, Income) → About Me →
Packages → Book a Consultation (Calendly + inquiry form).

## Files

- `index.html` — the public marketing site
- `onboarding.html` — private client onboarding page (see below)
- `styles.css` — all styling
- `script.js` — mobile nav toggle + inquiry form submission
- `robots.txt` — keeps `onboarding.html` out of search engines

## Launch checklist — all done
- Calendly, wired up to `https://calendly.com/hitchedwiththeharneds/30min`
- Formspree inquiry form, wired up to `https://formspree.io/f/xnpqppzr` (it'll email
  you a confirmation link the first time someone submits the form — click it to activate)
- Name, story, headshot (`images/devyn-headshot.jpg`), package pricing, and Lifestyle
  Intensive travel radius (15 miles)

## Client flow: how the pieces fit together

The public site (`index.html`) only ever routes visitors to the free consultation —
there are no direct "buy" buttons on the packages. That's intentional: everyone talks
to you first. Once someone says yes on the call, send them straight to `onboarding.html`.

**`onboarding.html`** is a private, unlisted page (not linked from the main site's nav,
and blocked from search engines via `robots.txt`) with four steps for a newly-accepted
client to complete, in order:

1. **Sign Your Agreement** — text only, no link. PandaDoc templates aren't a single
   reusable public link; each client needs their own personalized document. When a
   client reaches this step, go into PandaDoc, click "Use Template" on your Build
   Her Coaching Agreement, and send the generated document to their email directly.
2. **Secure Your Spot** → currently cash, Zelle, or check (full or half payment;
   $50 discount for paying in full in cash) — you send payment details directly
   once the agreement is signed, and provide a receipt
3. **Complete Your Intake Form** → wired up to your real Google Form
4. **Book Your First Session** → wired up to your real "First Session" Calendly link

All four steps are fully set up. Deploy the page alongside `index.html` (same folder)
so it lives at `yourdomain.com/onboarding.html`, and send that link directly to each
client after their consultation — no need to publicize it anywhere else.

**If you set up Stripe later**, tell me and I'll add a "Pay by Card" option back into
Step 2 alongside cash/Zelle/check.

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
