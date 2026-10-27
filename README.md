# Game Landing Page Template

<p align="center">
  <a href="https://game-landing-page-kappa.vercel.app/"><img src="https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel" alt="Live demo on Vercel" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js badge" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript badge" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS badge" />
</p>

This template is a game landing page implemented with Next.js static generation and Tailwind CSS. The design is inspired by [Zelal Hossain](https://www.figma.com/community/file/1217036317745794461).

## Local Development
Install dependencies: `npm install`
Local development: `npm ci
npm run dev`

## Style Theme
You can modify the color theme in `/src/styles/globals.css`.

## Deploy
[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?from=github&template=game-landing-page)

## Features
- Developed with Next.js TypeScript
- Flexible and clean styling with Tailwind CSS
- Purely static pages, excellent Lighthouse scores
- Modular, responsive and scalable components



## Dependency security

The project now pins Next.js and React to patched releases and the CI workflow runs `npm audit --omit=dev --audit-level=high`, lint, TypeScript checks, a production build, and syntax validation for the image compression script. Keep `package.json` and `package-lock.json` synchronized; do not deploy a stale lockfile.
