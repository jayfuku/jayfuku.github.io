---
layout: post
order: 1
permalink: /projects/HSRVision/
title: HSRVision
description: "Real-time damage tracker for Honkai: Star Rail, powered by screen capture and on-device machine learning."
headline: "See who's carrying. In real time."
live-url: https://hsr-vision.app
skills:
- TypeScript
- React
- Machine Learning
- ONNX Runtime
- Frontend Engineering
main-image: /hsrvision-promo.png
---
## Summary

HSRVision captures your screen while you play Honkai: Star Rail, reads the damage numbers as they appear, and identifies which character is taking each turn. All in real time, all in your browser. No installs. No backend. Just share your screen and watch the leaderboard build itself.

## Deep Dive

I play a lot of HSR, and one thing that always bugged me was not knowing how damage was actually distributed across my team. You get a rough sense from watching, but nothing concrete, and once the fight ends it's gone. I wanted a live damage leaderboard while I played. That turned out to be a much more interesting engineering problem than I expected.

The core mechanic is three steps: the browser's screen capture API grabs live frames from your game window, an OCR pass reads the damage number from each frame, and a fine-tuned image classifier identifies which character just dealt that damage. The result is a per-character damage tracker that updates after every turn.

The tricky part was detection. My first instinct was to watch for brightness spikes in the damage region, but that was too noisy with too many false positives from skill animations and UI transitions. Switching to OCR as the detection signal fixed it: if a damage number appears, a turn is happening, and that number is also the damage value. One read, two problems solved. The model runs entirely in-browser via ONNX Runtime Web, so inference happens locally with no round trips.

The labeling pipeline was its own project. With over a million frames across 107 character classes, hand-labeling wasn't an option, so I automated it in two stages. First, CLIP cosine similarity matched each frame against a reference image per character. Then a logistic regression model trained on top of those CLIP embeddings cleaned up the harder cases where similarity scores alone weren't reliable. A custom tkinter GUI handled the rest: low-confidence frames queued up for manual review, filed to the right folder on a keypress. The exported ONNX model is under 10MB and runs fast enough to classify every completed turn without dropping frames.

HSRVision is the project I'm most proud of technically. It goes from raw pixels to a live ML-powered interface without a server in sight. Building it taught me more about browser APIs, ML training, and React architecture than anything else I've shipped.
