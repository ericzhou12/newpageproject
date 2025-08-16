# The New Page Project Website

A unique, interactive website for The New Page Project featuring a book-flip page transition design that perfectly embodies the organization's mission of turning pages on education inequality.

## 🌟 Features

### Unique Book Design
- **3D Book Interface**: The website is designed as an interactive book that opens and flips pages
- **Smooth Page Transitions**: Each section transition mimics turning a page in a real book
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing
- **Immersive Experience**: Users feel like they're reading through an actual book

### Content Sections
1. **Home**: Welcome page with mission overview and key statistics
2. **Our Story**: Timeline of TNPP's journey from 2022 to 2025
3. **Our Impact**: Statistics, awards, and partnerships showcase
4. **Chapters**: Information about local and international chapters
5. **Gallery**: Photo gallery with filtering by category (schools, donations, awards)
6. **Get Involved**: Ways to support and connect with the organization

### Technical Features
- **Next.js 15**: Latest React framework with App Router
- **Framer Motion**: Smooth animations and page transitions
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom book theme
- **Responsive Images**: Optimized image loading with Next.js Image component
- **Mobile-First**: Designed for mobile devices with desktop enhancements

## 🎨 Design Philosophy

The website embodies the concept of "turning a new page" through:
- **Book-like Interface**: Mimics the experience of reading a physical book
- **Warm Color Palette**: Brown leather book cover with cream pages
- **Typography**: Elegant serif fonts for headings, clean sans-serif for body text
- **Interactive Elements**: Hover effects and smooth transitions enhance user engagement

## 📱 Mobile Optimization

- Responsive book design that adapts to screen size
- Touch-friendly navigation tabs
- Optimized image loading for mobile networks
- Simplified animations for better performance on mobile devices

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and book theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page with book navigation
├── components/
│   ├── BookLayout.tsx       # Main book interface component
│   ├── LoadingSpinner.tsx   # Loading state component
│   └── pages/               # Individual page components
│       ├── HomePage.tsx
│       ├── StoryPage.tsx
│       ├── ImpactPage.tsx
│       ├── ChaptersPage.tsx
│       ├── GalleryPage.tsx
│       └── ContactPage.tsx
└── public/
    └── images/              # Organization photos
        ├── awards/          # Award ceremonies and certificates
        ├── bookdonations/   # Book drives and donations
        └── schools/         # School events and programs
```

## 🎯 Key Statistics Highlighted

- **20,000+** books donated
- **$4,500+** funds raised
- **15+** schools reached
- **5** countries impacted
- **5** active chapters

## 🌍 Global Impact

The website showcases TNPP's reach across:
- **United States**: Michigan (HQ), Pennsylvania, Maryland, Chicago
- **International**: Nigeria, Mexico

## 📸 Image Integration

The website integrates photos from three main categories:
- **Schools**: Reading sessions, book fairs, cultural presentations
- **Book Donations**: Community drives, sorting events, distribution
- **Awards**: Recognition ceremonies, certificates, conferences

## 🔧 Customization

The book theme can be customized through:
- CSS custom properties in `globals.css`
- Tailwind configuration in `tailwind.config.js`
- Component-level styling in individual page components

## 📈 Performance

- Optimized images with Next.js Image component
- Lazy loading for gallery images
- Efficient animations with Framer Motion
- Mobile-first responsive design
- Fast page transitions with client-side navigation

## 🤝 Contributing

This website represents The New Page Project's mission to make education accessible through innovative design and storytelling. The book metaphor reinforces the organization's core message while providing an engaging user experience.

---

*Built with ❤️ for The New Page Project - Turning the page on education inequality*