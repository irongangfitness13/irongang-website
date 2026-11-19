# Iron Gang Fitness website code

Custom page designs for irongangfit.com (a Squarespace site). The page code
lives here and is served by GitHub Pages; Squarespace only holds a two-line
snippet per page that loads it.

- Repo: github.com/irongangfitness13/irongang-website (public; GitHub Pages from `main`, root)
- Live base URL: https://irongangfitness13.github.io/irongang-website/

## Layout

- `pages/home.html`  → irongangfit.com/
- `pages/apply.html` → irongangfit.com/apply
- `pages/kgp.html`   → irongangfit.com/kgp (Killer Golf Performance spin-off; its CSS is at the top of this file)
- `pages/card.html`  → KGP digital business card (Squarespace page URL set by the owner; hides the site header/footer)
- `assets/` — images for the card and `Josh-Gangaware-KGP.vcf` (the "Save my contact" file; edit it to change contact details)
- `loader.js` — fetches `pages/<name>.html` into `<div data-igf-page="<name>">` and re-runs its scripts in order
- `squarespace/` — exactly what is pasted into Squarespace (only changes if a page is added)
- `test/` — local test pages; they stub `gtag` and MailerLite so tests never count conversions or submit leads
- `archive/` — snapshots of code before changes

## Publishing a change

1. Edit the file in `pages/`.
2. Test locally: start the `local-preview` server (.claude/launch.json) and open `/test/<name>.html`.
3. Commit and push to `main`. GitHub Pages redeploys in about a minute; the loader
   fetches with `cache: 'no-cache'`, so visitors get the new version right away.
4. Check the live page (logged out of Squarespace — scripts don't run in the editor).

## Things to know

- Google Ads conversion (`AW-594857657/o00jCNmMr7oZELmd05sC`) fires only on a successful
  Apply submit (pages/apply.html) and KGP form success (pages/kgp.html). Never on page load.
- Apply form posts to MailerLite form 201874202245990065; KGP form uses MailerLite embed 47548792.
- Never submit the real forms when testing; use the test pages.
- Adding a new page: create `pages/<name>.html`, add a matching snippet in `squarespace/`,
  and the owner pastes that snippet into a Code Block on the new Squarespace page once.
- Page titles, SEO descriptions and social images are Squarespace page settings, not code here.
