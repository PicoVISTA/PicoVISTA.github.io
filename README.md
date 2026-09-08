# PicoVISTA Project Page

Project page for **PicoVISTA: Small Policy, Selective Reasoning for Robust On-Device Robot Manipulation**.

## Local development

Use Node.js 22 LTS. Vinext beta currently triggers a Windows/libuv shutdown assertion under Node.js 24 after an otherwise successful build.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
```

The static site is emitted to `dist/client`.

## Content notes

- The current manuscript is anonymized for double-blind review, so author names and permanent publication links are intentionally omitted.
- Real-world HEVC source clips are transcoded to browser-compatible H.264 for the site.
- CALVIN and LIBERO clips retain their original H.264 encodings.
- Update the paper, code link, authors, and BibTeX after review.
