# Fabian Roeben — Personal Website

Source code for [fabianroeben.com](https://fabianroeben.com), an academic personal website built with Next.js, TypeScript, and Tailwind CSS.

The site is statically exported and includes Fabian's profile, research, education, teaching, CV, contact links, light and dark themes, and search-engine metadata.

## Development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available checks:

```bash
npm run lint
npm run build
```

`npm run build` creates the deployable static site in `out/`.

## Project structure

- `app/` contains the homepage, root layout, metadata routes, and global styles.
- `components/` contains the page sections and shared interface components.
- `data/siteConfig.ts` contains profile details, contact links, and site metadata.
- `data/content.ts` contains the about, education, teaching, and affiliation content.
- `data/papers.ts` contains research papers, abstracts, authors, statuses, and links.
- `public/` contains the profile image, CV, favicons, and paper PDFs.

## Updating content

Edit `data/siteConfig.ts` for profile or contact information and `data/content.ts` for biographical content. Research entries are defined in `data/papers.ts` and use the shared schema in `types/papers.ts`.

When adding a local CV or paper link, place the corresponding file under `public/` and reference it with a root-relative URL such as `/papers/paper.pdf`.

Visual styles and theme tokens are defined in `app/globals.css` using Tailwind CSS v4.

## Deployment

Pushes to `main` are validated and deployed automatically to Hetzner through the `Deploy to Hetzner via FTPS` GitHub Actions workflow. The same workflow can be started manually from the repository's Actions page if an automatic run is not created.

The workflow installs dependencies with `npm ci`, runs lint and the production build, validates the static export, synchronizes `out/` over FTPS, and checks the public site after upload. Deployments are serialized so concurrent pushes cannot overlap.

The repository requires these GitHub Actions secrets:

- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PORT`
- `FTP_PATH`

The canonical production URL is configured in `data/siteConfig.ts` and is also used for metadata, `robots.txt`, and the sitemap. Requests to `www.fabianroeben.com` are redirected permanently to `fabianroeben.com` by the exported `.htaccess` file.

## License

See [LICENSE](LICENSE).
