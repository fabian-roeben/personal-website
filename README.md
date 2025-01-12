# Personal Website
Academic website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern Design
  - Dark/Light mode support
  - Fully responsive layout
  - Custom animations
    - Subtle slide-up animations on mobile
    - Side-slide animations on desktop
  - Mobile-friendly navigation
  
- 🚀 Performance Optimized
  - Static site generation
  - Optimized image handling with next/image
  - Efficient font loading with next/font
  - Responsive design patterns
  
- 🔍 SEO Ready
  - Meta tags optimization
  - JSON-LD structured data
  - OpenGraph support

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** 
  - Radix UI for core components
  - Framer Motion for animations
  - Lucide React for icons
  - next-themes for dark mode

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

## Development Notes

### Component Architecture
- Type-safe props with TypeScript interfaces
- Modular component structure
- Shared UI components for consistency
- Responsive design implementation

### Styling System
- Tailwind CSS with custom theming
- CSS variables for dynamic colors
- Responsive breakpoints
- Custom animations
- Optimized font loading

## Deployment

Automated deployment via GitHub Actions:
1. Triggers on main branch pushes
2. Builds and generates static files
3. Deploys to Hetzner via FTPS
4. Includes 404 page handling

## License

MIT License - See [LICENSE](LICENSE) file for details.