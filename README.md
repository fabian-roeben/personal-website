# Academic Personal Website Template

A personal website template for academics built with Next.js 15, TypeScript, and Tailwind CSS. Designed for researchers who need a clean, professional web presence to showcase their work, publications, and academic profile.

## Overview

This template provides a complete, easy-to-customize solution for academic personal websites. It includes sections for research papers, education, teaching, and a personal profile. The codebase emphasizes maintainability, performance, and accessibility, all while providing a modern user experience.

## Key Features

- **Easy Customization**: All personal data and content sections are managed in central data files.
- **Responsive Design**: Optimized for all screen sizes, from mobile phones to desktop monitors.
- **Dark and Light Themes**: Supports both themes and detects user's system preference.
- **Dynamic Research Section**: Manage publications, working papers, and works in progress with expandable abstracts.
- **SEO Optimized**: Includes structured data for academic profiles to improve search engine visibility.
- **High Performance**: Built as a static site for fast loading times and reliable hosting.

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Theme Management:** `next-themes`

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to see the result.

## Customization Guide

Customizing the template is straightforward. All the content and personal information is managed in the `/data` directory.

### 1. Personal Information

Edit the `data/siteConfig.ts` file to update your personal details, including your name, job title, and social media links.

```typescript
// data/siteConfig.ts
export const siteConfig = {
  name: "Your Name",
  url: "https://your-website.com",
  jobTitle: "Your Job Title",
  location: "Your University",
  locationLink: "https://your-university-link.com",
  email: "your.email@university.com",
  cv: "/your-cv.pdf",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    twitter: "https://x.com/your-handle",
  },
  profileImage: {
    src: "/profile.jpg",
    alt: "A portrait of Your Name",
  },
};
```

To change the profile picture, replace the `profile.jpg` file in the `/public` directory with your own image.

### 2. Main Content Sections

The sections on the main page (About, Education, etc.) are defined in `data/mainSections.ts`. You can reorder them by changing their order in the array. 

The content for these sections is managed in `data/content.ts`. Here you can update the text for the "About" section, your educational history, and your teaching experience.

### 3. Research Papers

Add your publications, working papers, and other research to `data/papers.ts`. You can categorize each paper as "Publications", "Working Papers", or "Selected Work in Progress".

```typescript
// data/papers.ts
export const papers: Paper[] = [
  {
    title: "Your Paper Title",
    category: "Working Papers", // or "Publications", "Selected Work in Progress"
    authors: [{ name: "Co-author Name" }],
    journal: "Journal of Awesome Research",
    links: [{ name: "PDF", url: "/papers/your-paper.pdf" }],
    abstract: "Your abstract here...",
  },
];
```
Make sure to add any corresponding files (like PDFs) to the `/public/papers/` directory.

### 4. CV
Replace the `cv_roeben.pdf` file in the `/public` directory with your own CV.

### 5. Styling
You can customize the color scheme and other design elements in `tailwind.config.ts` and `app/globals.css`.

## Deployment

The site is configured for static export and can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

1.  **Build the static site:**
    ```bash
    npm run build
    ```
2.  **Deploy:**
    Deploy the generated `/out` directory to your hosting service of choice.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.