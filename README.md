# Developer Portfolio Website

A modern, fully-featured developer portfolio built with **Next.js 16**, **TypeScript**, **TailwindCSS**, and **Supabase**.

## Features

✅ **Server-Side Rendering**: Fast performance with Next.js App Router and Server Components
✅ **Dynamic Content**: All data fetched from Supabase database
✅ **Responsive Design**: Mobile-first approach with TailwindCSS
✅ **Functional Contact Form**: Messages saved directly to Supabase
✅ **Zero Custom Admin UI**: Manage everything via Supabase Dashboard
✅ **Type-Safe**: Full TypeScript support
✅ **Production-Ready**: Optimized build

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Supabase PostgreSQL
- **Backend**: Next.js Server Components
- **Icons**: Lucide React

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Copy your **Project URL** (HTTPS format) and **Anon Key**
3. In Supabase Dashboard, go to **SQL Editor**
4. Create a new query and paste the contents of `supabase-schema.sql`
5. Execute the query

### 3. Configure Environment

Create `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://yourproject.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Database Tables

- **profile**: Personal information, bio, links
- **projects**: Portfolio projects with tech stacks
- **experience**: Work history timeline
- **skills**: Technical skills grouped by category
- **contact_messages**: Contact form submissions

## Managing Content

Edit all content directly in the [Supabase Dashboard](https://supabase.com/dashboard):
- No redeployment needed
- Changes appear instantly
- Full control via admin panel

## Project Pages

- **Home (`/`)**: Profile, featured projects, skills, CTA
- **Projects (`/projects`)**: Grid of all projects
- **Experience (`/experience`)**: Timeline of work history
- **Contact (`/contact`)**: Contact form and social links

## Build & Deploy

```bash
npm run build    # Production build
npm run start    # Start production server
```

### Deploy to Vercel
1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy automatically on push

## Performance
- ✅ Server-side rendering
- ✅ Static page generation
- ✅ Minimal JavaScript
- ✅ Fast database queries

## Security
- ✅ Supabase Row Level Security
- ✅ Public read access for content
- ✅ Insert-only for contact messages
- ✅ No write/delete access for public users

## Customization

### Change Colors
Find and replace `bg-blue-600`, `text-blue-`, etc. with your preferred Tailwind colors

### Add Custom Fonts
Use `next/font` in `src/app/layout.tsx`:
```tsx
import { Geist } from 'next/font/google'
const geist = Geist()
```

## Troubleshooting

**"Could not find the table" error**
- Run `supabase-schema.sql` in Supabase Dashboard

**Contact form not working**
- Verify `contact_messages` table exists
- Check Supabase credentials in `.env.local`

**Images not showing**
- Use public Supabase Storage URLs
- Ensure storage buckets have public access

## File Structure

```
src/
├── app/              # Pages (Home, Projects, Experience, Contact)
├── components/       # Header, ProjectCard
├── lib/             # Supabase client & data fetching
└── types/           # TypeScript definitions
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

**Built with Next.js + Supabase**
