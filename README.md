# Amaljith U K — The Portfolio Issue #01

A comic-book portfolio. Newsprint paper, ink outlines, halftone dots, speech bubbles,
sound-effect words and slightly too many exclamation marks. Built with React + Vite +
Tailwind, and drawn to match the résumé.

## What's inside

| Route | Chapter | What it is |
| --- | --- | --- |
| `/` | Cover | Opening panel, stat stickers, skill power-bars, this month's issues |
| `/about` | 01 · Origin | Comic strip, education, the three internships, gadget belt, side quests |
| `/projects` | 02 · Issues | Four project "issues" with a category filter |
| `/achievements` | 03 · Trophy room | UGC NET, ModelQuest, certificates, sports panel |
| `/contact` | 04 · Signal | Mailto-powered form, direct lines, FAQ |
| `*` | — | 404: "This page walked into the multiverse" |

## Editing the content

**All copy lives in one file:** [`src/data/resume.ts`](src/data/resume.ts).
Profile, summary, experience, education, skills, projects, achievements, leadership,
languages — change it there and every page updates. The jokes are in that file too.

Images: `public/lovable-uploads/profile.png` (photo) and
`public/lovable-uploads/portrait-halftone.png` (the "comic-ify me" version, generated from
the photo).

## Playful bits (on purpose)

- **Comic cursor:** an inked arrow that leans into its own movement, a lagging dashed
  reticle that locks on to anything clickable, and a little trail of stars. Only on
  precise pointers; touch devices and reduced-motion visitors keep the normal cursor.
- **Sound kit:** a `SFX` toggle (on by default, remembered per browser) adds hover ticks,
  click pops, a page-change whoosh and a three-note chime when the contact mail opens.
  Everything is synthesised with WebAudio — no audio files, and it waits for a real
  gesture before making a peep.
- Sound-effect words pop wherever you click, on top of the sound kit.
- Comic panels reveal with a springy page-turn as you scroll (disabled automatically for
  `prefers-reduced-motion`).
- Two infinite ticker strips, a reading-progress rail, sticker navigation, halftone
  backdrops and a barcode on the back cover.
- "Comic-ify me" flips the portrait to its halftone print version.

## Run it

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
npm run preview
```

## Stack

- Vite 5 · React 18 · TypeScript
- Tailwind CSS 3 (custom comic design tokens in `src/index.css`)
- React Router 6
- Hand-rolled design system in `src/components/comic/` (`ComicKit`, `Effects`, `CursorFX`)
- Fonts: Bangers + Comic Neue + Special Elite (Google Fonts), with system comic fallbacks

## Contact

- Email: jith94245@gmail.com
- LinkedIn: [linkedin.com/in/amaljithuk2003](https://linkedin.com/in/amaljithuk2003)
- GitHub: [github.com/Amaljithuk](https://github.com/Amaljithuk)
