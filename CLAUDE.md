# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Jay Fukumoto at [jayfukumoto.dev](https://jayfukumoto.dev). Built with Jekyll and hosted via GitHub Pages.

## Commands

```bash
# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

## Architecture

This is a Jekyll static site — no Node/npm, no build pipeline beyond `bundle exec jekyll`.

**Content is driven by `_config.yml`.** All personal info (name, headline, bio, skills, social links, resume URL, color theme) lives there. It's the first place to look when changing anything site-wide.

**Layouts and includes:**
- `_layouts/wrapper.html` — the root HTML shell (head, fonts, scripts, navbar, footer). All pages use this.
- `_layouts/post.html` — layout for individual project pages.
- `_layouts/about.html` — alternate layout (currently unused).
- `_includes/` — reusable sections: `hero.html`, `projects.html`, `skills.html`, `navbar.html`, `footer.html`.

**Styling:**
- `css/styles.css` — all site styles. CSS custom properties (`--text-color`, `--link-color`, etc.) are injected from `_config.yml` via Liquid at the top of the file, so the color theme is configured entirely in `_config.yml`.
- `css/syntax.css` — code block syntax highlighting (Rouge).
- Fonts: Plus Jakarta Sans (headings), Inter (body), Lora (italic accents) — loaded from Google Fonts in `wrapper.html`.
- Icons: Font Awesome 6 via CDN.

**Projects:**
- Each project lives in `_projects/<project-name>/index.md` with front matter fields: `layout`, `title`, `description`, `headline`, `github-url`, `live-url`, `skills`, `main-image`.
- Project images go in the same folder as the project's `index.md` (e.g., `_projects/HSREndgameDB/HSREndgameDBPromo.png`).
- Projects are output at `/projects/<name>/` per the permalink config.

**Resume:** PDF at `assets/resume/`. The path in `_config.yml` (`resume-url`) must match the actual filename.

**Docs and planning artifacts** are in `~/Projects/claude/jayfuku.github.io/`, not in this repo.
