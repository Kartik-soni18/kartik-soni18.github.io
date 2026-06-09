# Kartik Soni Portfolio

Personal website and portfolio for Kartik Soni.

Live site: [kartik-soni18.github.io/personal-website](https://kartik-soni18.github.io/personal-website/)

## Overview

This repository contains the source for my portfolio website. It highlights my work in software engineering, AI systems, cloud infrastructure, and selected personal projects.

The site is built as a static React application and deployed with GitHub Pages.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- GSAP
- React Router

## Local Development

```bash
npm install
npm run dev
```

The local development server runs at `http://127.0.0.1:5173/`.

## Production Build

```bash
npm run build
```

Build output is generated in `dist/`.

## Deployment

This repository uses GitHub Actions to deploy automatically to GitHub Pages on every push to `main`.

Deployment workflow:
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

Important GitHub repository setting:
- In GitHub, open `Settings -> Pages`
- Set `Source` to `GitHub Actions`

## Project Structure

```text
.
├── public/                  Static assets
├── src/
│   ├── components/          Shared UI components
│   ├── sections/            Page sections
│   ├── config.ts            Portfolio content and links
│   ├── App.tsx              App routes
│   ├── index.css            Global styles
│   └── main.tsx             App entry point
├── .github/workflows/       GitHub Actions workflows
├── index.html               HTML shell
├── package.json             Scripts and dependencies
└── vite.config.ts           Vite configuration
```

## Content Updates

Most site content is managed in:

- [src/config.ts](src/config.ts)

This includes:
- hero text
- navigation labels
- project cards
- project website and GitHub links
- footer contact links

## Notes

- The project cards open the live project website by default.
- Each project card also includes a dedicated GitHub repository action.
- The Vite base path is configured to work correctly for GitHub Pages builds.

## License

This project is for personal portfolio use.
