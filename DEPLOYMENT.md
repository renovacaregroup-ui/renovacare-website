# Virtualmin Deployment Guide

This project is configured as a static export:

- `output: 'export'` in `next.config.ts`
- build output goes to `out/`
- the exported site should be uploaded to Virtualmin's `public_html`

## Recommended Deployment Flow

### 1. Build locally

```bash
npm install
npm run build
```

After the build finishes, use the generated `out/` folder.

### 2. Upload to Virtualmin

In Virtualmin, the website document root is usually:

```bash
/home/your-domain-user/public_html
```

Upload the contents of `out/` into `public_html`.

Important:

- upload the files inside `out/`, not the whole project folder
- do not upload `.next/`
- do not run `npm start` for this version of the site
- do not place the site at `public_html/out`

Correct result:

- `out/index.html` -> `public_html/index.html`
- `out/privacy-policy/index.html` -> `public_html/privacy-policy/index.html`
- `out/refund-policy/index.html` -> `public_html/refund-policy/index.html`
- `out/terms/index.html` -> `public_html/terms/index.html`

### 3. Replace old files cleanly

Before uploading the new build, remove old website files from `public_html` so stale assets do not mix with the new export.

Keep any server-managed files you know are still needed, such as:

- SSL validation files
- `.well-known/` contents
- hosting control files added by Virtualmin

### 4. Confirm these URLs work

After upload, check:

- `https://renovacare.my/`
- `https://renovacare.my/privacy-policy/`
- `https://renovacare.my/refund-policy/`
- `https://renovacare.my/terms/`

## Common Problems

### CSS or JavaScript missing

Cause:

- `.next/` was uploaded instead of `out/`
- build files were uploaded into the wrong directory

Fix:

- rebuild
- upload `out/` contents directly into `public_html`

### Inner pages return 404

Cause:

- subfolders like `terms/` or `privacy-policy/` were not uploaded
- files were uploaded as a nested `out/` directory

Fix:

- make sure `public_html/terms/index.html` exists
- make sure `public_html/privacy-policy/index.html` exists

### Old page still appears

Cause:

- browser cache or CDN cache
- old files still remain in `public_html`

Fix:

- clear cache
- remove old site files and upload the fresh `out/` build again

## When To Use Node.js Instead

Only switch to a Node.js app in Virtualmin if the site truly needs server-side features such as:

- API routes
- server actions
- authentication handled by the app server
- dynamic server rendering

This current project does not need that for deployment.
