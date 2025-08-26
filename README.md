# Academic Personal Website

A personal website template for academics built with Next.js 15, TypeScript, and Tailwind CSS. Designed for researchers who need a clean, professional web presence to showcase their work, publications, and academic profile.

## Overview

This website template provides a complete solution for academic personal websites with sections for research papers, education background, teaching experience, and professional information. The codebase emphasizes maintainability, performance, and accessibility while providing a modern user experience.

## Key Features

- Responsive design optimized for academic content presentation
- Dark and light theme support with system preference detection
- Dynamic research paper management with expandable abstracts
- SEO optimization with structured data for academic profiles
- Static site generation for reliable hosting and performance
- Professional typography suitable for academic contexts

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript with strict type checking
- **Styling:** Tailwind CSS with custom design system
- **Animation Library:** Framer Motion
- **Icons:** Lucide React with custom SVG components
- **Theme Management:** next-themes
- **Build Target:** Static export for universal hosting compatibility

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
│   ├── ui/          # Shared UI components
│   ├── layout/      # Layout components
│   └── social/      # Social media components
├── public/          # Static assets (e.g. PDFs for papers and CV)
├── lib/             # Utility functions
├── types/           # TypeScript definitions
└── data/           # Data files and constants (content for papers)
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Content Management

The website content is managed through structured data files:

- **Research Papers:** Defined in `data/papers.ts` with TypeScript interfaces for type safety
- **Personal Information:** Configured in component files and layout metadata
- **Theme Colors:** Customizable through CSS variables in `app/globals.css`

### Adding Research Papers

Papers are managed as TypeScript objects with the following structure:

```typescript
{
  title: string;
  authors?: Author[];
  status?: string;
  journal?: string;
  edition?: string;
  links?: Link[];
  abstract?: string;
}
```

## Architecture Notes

### Component Structure
- Modular design with clear separation between layout, content, and UI components
- TypeScript interfaces ensure type safety across the application
- Reusable components promote consistency and maintainability

### Styling Approach
- Custom Tailwind CSS configuration with academic-appropriate color palette
- CSS variables enable dynamic theming between light and dark modes
- Responsive design uses mobile-first methodology

### Performance Considerations
- Static site generation eliminates server-side dependencies
- Optimized image loading with Next.js Image component
- Minimal JavaScript bundle with tree-shaking for unused code

## Deployment

The site is configured for static export and can be deployed to any static hosting service. The included configuration supports:

- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting via FTP/FTPS
- CDN services

Build the static site with `npm run build` and deploy the generated `out/` directory.

## License

MIT License - See [LICENSE](LICENSE) file for details.