# Personal Website
Academic website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🎨 Tailwind CSS styling
- 🏗️ Built with Next.js static export
- 🔍 SEO optimized with JSON-LD
- ⚡ Optimized image handling
- 🌊 Animated wave background
- 📱 Mobile-friendly navigation
- 🎭 Smooth animations with Framer Motion

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - UI Components
- **Lucide React** - Icons
- **next-themes** - Dark mode support

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- **app** - Next.js app directory with page components
- **components** - Reusable React components
  - **/ui** - Shared UI components
  - **/layout** - Layout components
  - **/social** - Social media components
- **public** - Static assets
- **lib** - Utility functions and shared code
- **types** - TypeScript type definitions
- **data** - Data files and constants

## Development

### TypeScript
The project uses TypeScript with strict mode enabled. Configuration can be found in `tsconfig.json`.

### Styling
- Tailwind CSS with custom theme configuration
- CSS variables for dynamic theme colors
- Framer Motion for animations
- Custom wave background effect
- Responsive design breakpoints
- Custom scrollbar styling

### Component Architecture
- Modular component structure
- Shared UI components in `/components/ui`
- Layout components in `/components/layout`
- Social media components in `/components/social`
- Type-safe props with TypeScript interfaces

### Browser Support
- Modern browsers with CSS Grid and CSS Variables support
- Custom scrollbar styling for WebKit and Firefox
- Optimized font loading with next/font
- Responsive images with next/image

## Deployment

The project uses GitHub Actions for automated deployment via FTPS to Hetzner. The deployment workflow is triggered on pushes to the main branch.

### Deployment Process
1. Builds the project
2. Generates static files
3. Uploads via FTPS to Hetzner
4. Includes 404 page handling

## Performance

- Static site generation for optimal performance
- Image optimization with next/image
- Font optimization with next/font
- Responsive design patterns
- Efficient bundle splitting

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.