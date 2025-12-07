# Ramesh Polisetti - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TailwindCSS, and Framer Motion.

## Features

- 🎨 Modern dark/neon theme with light/dark mode toggle
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🚀 Built with Next.js 14 (App Router)
- 🎯 SEO optimized with metadata
- 💼 Professional sections: Hero, About, Skills, Experience, Projects, Education, Contact

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Experience.tsx   # Experience timeline
│   ├── Projects.tsx     # Projects showcase
│   ├── Education.tsx    # Education & Certifications
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer
│   └── ThemeProvider.tsx # Theme context
└── public/              # Static assets
```

## Customization

- Update personal information in respective component files
- Modify colors in `tailwind.config.ts`
- Add/remove sections in `app/page.tsx`
- Update metadata in `app/layout.tsx`

## License

MIT

