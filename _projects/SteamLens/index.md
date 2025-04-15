---
layout: post
title: SteamLens
description:  Chrome Extension to be more informed about videogames
skills: 
- Typescript
- React
- RESTful API
- Express.js
- Front/Backend Engineering
main-image: /440x280 Small Promo Tile.png
---
## Overview

SteamLens is a Chrome extension designed to help streamline the experience of search for information about the next games users want to play. This extension allows users to quickly view information from various sources in one place.

No new tabs, no hassle.

## Deep Dive

SteamLens was created out of a problem I noticed in my life as an avid videogame player. There's always new and exciting games coming out but just looking at the official store page usually isn't enough to sway me on the game and I would frequently look at other sources to get information such as reviews, expected playtime, and compatibility.

This process of consulting different sources before making a purchase often took multiple tabs and a decent amount of manual searches which became tiresome. From this pain point is where I saw the potential of SteamLens. What if there was just one, consolidated place where I can get all this info from?

SteamLens is built on Typescript+React frontend with a Express.js backend. The backend is necessary here since sources of information, such as store.steampowered.com, have APIs but only for retrieving metadata which meant that the processing load of performing a search and matching a search query to a game has to be offloaded to a backend service. 

SteamLens comes with compatibility for IGDB game rating, IGDB game completion times, and ProtonDB compatibility.

To read more from the public informational respository, click [here](https://github.com/jayfuku/SteamLens-Public/tree/patch).

To download SteamLens from the Chrome Web Store and try it out yourself, click [here](https://chromewebstore.google.com/detail/steamlens/dlkmkiiccmmfjoodngomfndmfilhblhe).
