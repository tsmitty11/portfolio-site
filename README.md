[![Netlify Status](https://api.netlify.com/api/v1/badges/394f0625-e6b7-463d-b707-0189257801f8/deploy-status)](https://app.netlify.com/sites/tomsmithdesign/deploys)

## Prerequisites
- [Node.js](https://nodejs.org/) (recommend the latest LTS release)
- [npm](https://www.npmjs.com/) (ships with Node)
- [Hugo](https://gohugo.io/getting-started/installing/) Extended version for Tailwind builds

## Installation
```bash
git clone <repo-url>
cd tomsmith-design
npm install
```

## Development
Run Hugo with Tailwind watching CSS changes:
```bash
npm run build:css -- --watch &
hugo server -D
```
Visit http://localhost:1313 to preview changes.

## Production Build
```bash
npm run build:css
hugo
```
Outputs to ./public.

## Deployments
Deployed automatically via Netlify: [![Netlify Status](https://api.netlify.com/api/v1/badges/394f0625-e6b7-463d-b707-0189257801f8/deploy-status)](https://app.netlify.com/sites/tomsmithdesign/deploys)