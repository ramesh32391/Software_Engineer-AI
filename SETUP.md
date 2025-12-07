# Portfolio Website Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Resume**
   - Replace `public/Ramesh_Polisetti_Resume.pdf` with your actual resume PDF file
   - The file should be named `Ramesh_Polisetti_Resume.pdf` and placed in the `public` folder

3. **Add Social Preview Image (Optional but Recommended)**
   - Create an image (1200x630px) for social media previews
   - Save it as `public/og-image.png`
   - This will be used when sharing your portfolio on social media

4. **Add Favicon (Optional)**
   - Replace `public/favicon.ico` with your custom favicon
   - You can also add `public/apple-touch-icon.png` for iOS devices

5. **Update Social Links (if needed)**
   - LinkedIn: Update in `components/Hero.tsx` and `components/Contact.tsx`
   - GitHub: Update in `components/Hero.tsx` and `components/Contact.tsx`
   - Email and Phone: Already set in `components/Contact.tsx`

6. **Run Development Server**
   ```bash
   npm run dev
   ```

7. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the neon color scheme:
- `neon-cyan`: Primary accent color
- `neon-pink`: Secondary accent
- `neon-green`: Success/accent
- `neon-blue`: Info accent
- `neon-purple`: Special accent

### Content Updates
- **Hero Section**: `components/Hero.tsx`
- **About Section**: `components/About.tsx`
- **Skills**: `components/Skills.tsx`
- **Experience**: `components/Experience.tsx`
- **Projects**: `components/Projects.tsx`
- **Education**: `components/Education.tsx`
- **Contact**: `components/Contact.tsx`

### SEO Metadata
Update `app/layout.tsx` to customize:
- Page title and description
- Open Graph tags
- Twitter card metadata
- Keywords

## Contact Form Setup

The contact form currently uses a simulated submission. To make it functional:

1. **Option 1: Use a service like Formspree**
   - Sign up at https://formspree.io
   - Update the form action in `components/Contact.tsx`

2. **Option 2: Use EmailJS**
   - Install: `npm install @emailjs/browser`
   - Configure in `components/Contact.tsx`

3. **Option 3: Use Next.js API Route**
   - Create `app/api/contact/route.ts`
   - Update form submission in `components/Contact.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Any platform supporting Next.js

## Features Included

✅ Dark/Light mode toggle
✅ Fully responsive design
✅ Smooth animations with Framer Motion
✅ SEO optimized
✅ Accessible navigation
✅ Modern UI/UX
✅ Professional sections
✅ Contact form
✅ Social media integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The website uses Next.js 14 with App Router
- All animations are optimized for performance
- Images should be optimized before adding
- The theme preference is saved in localStorage

