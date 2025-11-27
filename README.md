# MedKey Landing Page

A modern, professional landing page for MedKey - a unified healthcare platform that lets patients access their entire medical history and instantly share it with any doctor.

## Features

- 🎨 **Modern Design**: Clean, healthcare-professional aesthetic with smooth animations
- 📱 **Responsive**: Fully responsive design for mobile, tablet, and desktop
- 🎭 **Animated Mobile Mockups**: Interactive phone interface showcasing product features
- ⚡ **Performance**: Built with Next.js 16 and optimized for speed
- 🔒 **Security-Focused**: Highlights HIPAA-conscious architecture and patient data control

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

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
medkey/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Header navigation
│   │   ├── Hero.tsx             # Hero section with CTA
│   │   ├── ProductPreview.tsx   # Animated mobile phone mockup
│   │   ├── HowItWorks.tsx       # 5-step process flow
│   │   ├── Features.tsx         # Core features grid
│   │   ├── WhyMedKey.tsx        # Problem/solution section
│   │   ├── Security.tsx         # Security & privacy section
│   │   ├── FAQ.tsx              # Accordion FAQ section
│   │   ├── CTA.tsx              # Call-to-action with email capture
│   │   └── Footer.tsx           # Footer with links
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main landing page
│   └── globals.css              # Global styles
├── public/                      # Static assets
└── package.json
```

## Sections

1. **Hero**: Main value proposition with animated background
2. **Product Preview**: Animated mobile phone mockup showing app interface
3. **How It Works**: 5-step process visualization
4. **Features**: 6 core features in a grid layout
5. **Why MedKey**: Problem/solution comparison
6. **Security**: HIPAA messaging and trust elements
7. **FAQ**: Accordion-style frequently asked questions
8. **CTA**: Email capture for early access
9. **Footer**: Links and contact information

## Customization

- **Colors**: Update Tailwind classes in components or modify `globals.css`
- **Content**: Edit component files in `app/components/`
- **Metadata**: Update SEO metadata in `app/layout.tsx`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

Or deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Your own server with Node.js

## License

Private - All rights reserved
