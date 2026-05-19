---
layout: post
title: Griddest
description: Browser-based tool that turns any image into a playable nonogram puzzle
headline: "BYOP! (Build your own puzzle)"
github-url: https://github.com/jayfuku/nonogram-maker
live-url: https://play-griddest.vercel.app/
skills:
- TypeScript
- React
- Canvas API
- Vite
- Frontend Engineering
main-image: /griddest-promo.png
---
## Summary

Griddest converts any image into a playable nonogram (picross) puzzle. Upload a photo and get a puzzle you can solve immediately or share with anyone via URL. No accounts. No ads. Everything runs in your browser.

## Deep Dive

Griddest is founded on my love for the Picross series of video games and desire to make nonogram style puzzles more accessible and customizable.

The core of the app is based on an image processing pipeline which checks for features of an image such as edges or brightness to determine which cells in your puzzle are filled. Due to the constraints of a black-and-white, grid-based puzzle, the site also offers manual controls for fine tuning.

Sharing and saving works entirely through encoding the puzzle within the URL. No server is required, this app ships entirely as a static bundle.

The puzzle player mode supports filling and marking, dragging, and clue highlighting to make the puzzling experience seamless just like the Picross games.

This project is a reminder of what modern browsers can achieve: a fully capable image-processing app with no ops cost and no friction for the user.
