# Dirr landing page

- Uses React, Typescript, Astro, Tailwind, Cloudflare Pages
- Website deployment: https://dash.cloudflare.com/1a11d24c9787142584165a91da34ff0f/pages/view/dirr 
- Dirr app: https://github.com/ben-xD/dirr

## Usage

- Prerequisites: install pnpm
- Install dependencies: `pnpm i`
- Start application: `pnpm dev`
- Deploy application: commit to develop. Cloudflare builds and deploys it.

## How this repo was started
- Create React, Typescript, Vite starter files: `npm create vite@latest . -- --template react-ts`, following https://vitejs.dev/guide/
- Install tailwind, following: https://tailwindcss.com/docs/guides/vite

## TODOs

- [ ] Fix appearance on mobile
- [ ] Show results for http://linter.structured-data.org/?url=dirr.orth.uk and https://developers.google.com/search/docs/appearance/structured-data using https://developer.chrome.com/docs/lighthouse/seo/structured-data/?utm_source=lighthouse&utm_medium=devtools
- [ ] Show results for embeds (see linkedin and facebook tools)