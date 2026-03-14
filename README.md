# Developer Portfolio Website

A modern, fully-featured developer portfolio built with **Next.js 16**, **TypeScript**, and **TailwindCSS**.

## Features

- **Server-Side Rendering**: Fast performance with Next.js App Router
- **Static Data**: All content managed via JSON files
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Dark Mode Support**: Automatic theme switching
- **Type-Safe**: Full TypeScript support
- **Production-Ready**: Optimized static export

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Data**: Static JSON files
- **Icons**: Lucide React

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Data

Edit `src/data/data.json` to add your personal information, projects, experience, and skills.

### 3. Add Images

Place your images in the `public/` folder:
- `profile_picture.png` - Your profile photo
- `/experience/company.png` - Company logos
- `/coding/platform.png` - Coding profile logos
- `/projects/project.png` - Project images

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Data Structure

Edit `src/data/data.json` to customize:

- **profile**: Personal information, bio, links
- **projects**: Portfolio projects with tech stacks
- **experience**: Work history timeline
- **skills**: Technical skills grouped by category
- **coding_profiles**: LeetCode, GFG, CodeChef links

## Project Pages

- **Home (`/`)**: Profile, coding profiles, featured projects, skills, CTA
- **Projects (`/projects`)**: Grid of all projects
- **Experience (`/experience`)**: Timeline of work history
- **Contact (`/contact`)**: Contact information and social links

## Build & Deploy

```bash
npm run build    # Production build (static export)
```

### Deploy to GitHub Pages

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. The included workflow will auto-deploy on push to main

## Performance

- Static site generation
- Minimal JavaScript
- Optimized images
- Fast load times

## Customization

### Change Colors

Find and replace `bg-blue-600`, `text-blue-`, etc. with your preferred Tailwind colors in the component files.

### Add Custom Fonts

Use `next/font` in `src/app/layout.tsx`:

```tsx
import { Geist } from 'next/font/google'
const geist = Geist()
```

## File Structure

```
src/
├── app/              # Pages (Home, Projects, Experience, Contact)
├── components/       # Header, ProjectCard, MobileNav
├── data/            # Static JSON data
├── lib/             # Data fetching utilities
└── types/           # TypeScript definitions
public/              # Static assets (images, resume)
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

**Built with Next.js + TailwindCSS**
