# Portfolio

Personal site for [Jeremiah Ramos](https://github.com/tallbreadstick). SolidJS, TypeScript, Tailwind v4, Vite.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Deploy (GitHub Pages)

1. Push to GitHub and enable **Pages → GitHub Actions** as the source.
2. On push to `main`, `.github/workflows/deploy.yml` builds and publishes `dist/`.
3. If the site is served from a **project** repo (e.g. `username.github.io/my-portfolio-website/`), set the build base path:

   ```yaml
   - run: npm run build
     env:
       BASE_PATH: /my-portfolio-website/
   ```

   For a user site repo (`username.github.io`), leave `BASE_PATH` unset.

## Content

Edit `src/data/portfolio.ts` for projects, certs, experiences, and `siteProfile` (GitHub, email, resume path).

Static assets live under `public/` (`media/`, `certs/`, `experience/`, `myself.png`).

## Media size

Demo videos are kept under GitHub’s 100 MB per-file limit. Re-encode oversized sources before committing:

```bash
ffmpeg -i input.mp4 -vf scale=-2:720 -c:v libx264 -crf 28 -preset medium \
  -c:a aac -b:a 128k -movflags +faststart output.mp4
```
