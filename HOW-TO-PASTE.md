# One-time Squarespace setup

After this, you never paste page code again. Changes are made in this folder,
published to GitHub, and show up on your site within about a minute.

This replaces the earlier paste guide. You do **not** need to paste the big
code files any more.

---

## Step 1: Google Ads tracking (skip if you already did it)

**Where:** the site-wide Code Injection page → **Header** box.
Find it with the **search bar at the top of the left editing panel** (or ⌘K): type
`code injection`. Otherwise: **Pages → scroll to the bottom → Custom Code (or
Website Tools) → Code Injection**.

Delete **only** these 4 lines and leave everything else in the box alone:

```html
<!-- Event snippet for Submit lead form (1) conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-594857657/o00jCNmMr7oZELmd05sC'});
</script>
```

---

## Step 2: Replace each page's Code Block with a 2-line snippet

Start with **/kgp** as a test. Once it looks right, do the other two.

For each page: edit the page → click the Code Block → select everything in it
→ delete → paste the snippet → Save.

**/kgp**

```html
<div data-igf-page="kgp"></div>
<script src="https://irongangfitness13.github.io/irongang-website/loader.js"></script>
```

**Home page**

```html
<div data-igf-page="home"></div>
<script src="https://irongangfitness13.github.io/irongang-website/loader.js"></script>
```

**/apply**

```html
<div data-igf-page="apply"></div>
<script src="https://irongangfitness13.github.io/irongang-website/loader.js"></script>
```

> While you're logged in and editing, Squarespace turns off scripts, so the block
> will look **empty** in the editor. That's normal. Check the real page in a
> private/incognito window.

---

## Step 3: Clear the KGP page's own Code Injection

The golf page's styles now load with the rest of its code, so the copy stored in
Squarespace is no longer needed.

**Where:** Pages panel → hover the KGP page → ⚙️ gear → **Advanced** → Page Header
Code Injection. It starts with `<style>` and `@import url("https://fonts.googleapis.com...`.

Do this **after** step 2 for /kgp is working. Copy what's there into a note first
if you want a backup (a copy is also in `archive/` in this folder), then delete it
all and save.

---

## Step 4: KGP SEO (settings, not code)

**Where:** Pages panel → hover the KGP page → ⚙️ gear → **SEO** tab

| Field | Paste this |
|---|---|
| SEO title | `Golf Fitness Training in Boca Raton | Killer Golf Performance` |
| SEO description | `Strength and mobility training for golfers in Boca Raton. Two assessments, no swing lessons: we build the rotation, power and durability your swing needs.` |

Then the **Social Image** tab: upload the KGP hero artwork.

---

## Check it worked

Open each page in a private/incognito window:

- **/kgp, home, /apply** all look the same as before (home now has no empty strip above the nav)
- On the home page, "Find your fix" scrolls down, and the guide cards and "Apply for coaching →" go to /apply
- Over the next few days in Google Ads, "Submit lead form" conversions drop to your real number of submissions

---

## Making changes from now on

Open this folder in Claude Code and say what you want, for example
*"change the hero headline on the home page and publish it."*
Claude edits the file in `pages/`, tests it, and pushes it to GitHub. The live
site updates within about a minute, with nothing to paste.

Every change is saved in GitHub's history, so any change can be undone.
