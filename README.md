# Just Systems Initiative (JSI) site

This repository hosts the JSI public website.

## Public access

- Production is hosted on **Cloudflare Workers** over HTTPS.
- Once deployed, the site is publicly reachable from any modern web browser at the worker URL (for example, `https://<worker-name>.<account-subdomain>.workers.dev`) and any connected custom domain.

## Automatic deployment on `main`

GitHub Actions deploys on every push to `main` using `.github/workflows/deploy.yml`.

Required repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Workflow behavior:

1. Install dependencies
2. Build production assets with `npm run build`
3. Deploy with Wrangler using `dist/server/wrangler.json`

## Local production build/run

```bash
npm ci
npm run build
npm run start
```

## Browser compatibility

Browser support targets are defined in `package.json` via `browserslist` and are set for broad modern browser compatibility (Chrome, Firefox, Safari, Edge-class modern engines).
