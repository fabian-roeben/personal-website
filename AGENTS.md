# Repository Guidelines

## Project Structure & Module Organization

This is a single-page academic website built with Next.js App Router, React, TypeScript, and Tailwind CSS v4. It exports static files; there is no backend or database.

- `app/`: homepage, root layout, providers, metadata routes, and global styles.
- `components/layout/`: header, profile, footer, and content sections under `SectionsMain/`.
- `components/ui/` and `components/social/`: shared interface elements and contact links.
- `data/siteConfig.ts`: identity, contact details, canonical URL, and SEO settings.
- `data/content.ts` and `data/papers.ts`: biography, education, teaching, and research entries.
- `types/` and `lib/`: paper interfaces, utilities, and hooks.
- `public/`: portrait, CV, paper PDFs, favicons, and Apache `.htaccess`.

## Build, Test, and Development Commands

- `npm ci`: install dependencies from the committed lockfile. CI uses Node.js 22.
- `npm run dev`: start local development at `http://localhost:3000`.
- `npm run lint`: run ESLint with Next.js Core Web Vitals and TypeScript rules.
- `npm run build`: compile, check TypeScript, and generate the deployable `out/` directory.

Production hosting serves `out/` directly. The existing `npm start` script invokes `next start`; use a static file server to preview the export.

## Coding Style & Naming Conventions

Use TypeScript, two-space indentation, and functional React components. Match nearby quote and semicolon conventions; no standalone formatter is configured. Use PascalCase for layout components, `use`-prefixed camelCase for hooks, and existing kebab-case conventions for shared UI files. Prefer `@/` imports and the `cn()` helper for conditional Tailwind classes.

Keep content in `data/`. Follow `Paper` in `types/papers.ts`; paper titles must be unique because they identify list items and abstract state. Reference local assets with root-relative URLs, such as `/papers/example.pdf`. Add client boundaries where browser APIs or hooks require them.

## Testing Guidelines

No automated test framework, coverage threshold, or test naming convention is configured. Run lint and build before submitting changes. For UI edits, manually check mobile and desktop layouts, both themes, keyboard navigation, abstract toggles, and reduced-motion behavior. Verify linked local PDFs exist.

## Commit & Pull Request Guidelines

History uses short, imperative descriptions, such as `Update contact info`; Conventional Commit prefixes are not required. Keep commits focused. PRs should describe the change, report validation, link relevant issues, and include screenshots for visual changes.

## Deployment & Configuration

Pushes to `main` trigger the Hetzner FTPS deployment workflow. Keep credentials in GitHub Actions secrets. Preserve static-export compatibility and `.htaccess` behavior; do not commit generated `out/`, `.next/`, or environment files.
