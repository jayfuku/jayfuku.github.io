# Project Cards Overhaul — Design Spec
**Date:** 2026-05-08  
**Scope:** Homepage project section (`_includes/projects.html`) and project front matter

---

## Problem

The current project cards are image-first, and the images are weak. The card layout (image → title → skills → description → button) is generic and doesn't differentiate the projects effectively. With only 2 projects, a 2-column grid also looks sparse/incomplete.

## Goals

- Make cards visually distinctive without relying on images
- Give each card a strong identity through a punchy headline
- Make 2 projects look intentional, not incomplete

## Out of Scope

- Project detail pages (`_layouts/post.html`)
- Any changes to `_config.yml` theming
- Adding more projects

---

## Card Design

**Layout:** Full-width horizontal cards, stacked vertically (flex column). Replaces the existing 2-column grid.

**Card anatomy (left to right):**
- Thin left accent-color border strip (site's CSS accent variable)
- Project number (`01`, `02`) — small, muted accent color
- Project title — large, bold
- Headline/tagline — beneath title, slightly smaller, lighter weight
- Skills tags — floated right, vertically centered

**Interactions:**
- Entire card is a clickable link (existing behavior)
- Hover: subtle background tint + slight box-shadow lift
- No separate "Read more" button

**Removed from card:**
- Promo image
- Description text
- "Read more →" button

---

## Data Changes

Add a `headline` field to each project's front matter. The existing `description` field stays (used on the detail page) but is no longer rendered on the card.

**HSREndgameDB (`_projects/HSREndgameDB/index.md`):**
```
headline: "Built for HSR players, by an HSR player"
```

**SteamLens (`_projects/SteamLens/index.md`):**
```
headline: "All the info you need, without leaving the page"
```

---

## Files to Change

| File | Change |
|------|--------|
| `_includes/projects.html` | New card markup — horizontal layout, no image, adds headline |
| `_projects/HSREndgameDB/index.md` | Add `headline` front matter field |
| `_projects/SteamLens/index.md` | Add `headline` front matter field |
| `css/styles.css` | New styles for `.project-card` — horizontal layout, accent border, hover state |

---

## Visual Reference

```
┌─ [accent border] ────────────────────────────────────────────────┐
│  01                                                               │
│  HSREndgameDB.info               [TypeScript] [React]            │
│  Built for HSR players, by an HSR player  [PostgreSQL] [Vercel]  │
└───────────────────────────────────────────────────────────────────┘

┌─ [accent border] ────────────────────────────────────────────────┐
│  02                                                               │
│  SteamLens                       [TypeScript] [React]            │
│  All the info you need, without leaving the page  [Express.js]   │
└───────────────────────────────────────────────────────────────────┘
```
