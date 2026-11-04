# Site Navigation Map

## Homepage (index.html)
Sections:
1. **Navigation Bar** (Fixed) → links to all main pages + social
2. **Hero Section** → Full-screen image + "Music Captured Differently" title
3. **Featured Artists Grid** → 7 artist cards (3-column responsive)
4. **About Section** → Bio + photographer image
5. **Portfolio Section** → 3 recent work images
6. **Contact Section** → Email + Instagram + Location
7. **Footer** → Nav links + social + copyright

## Artist Pages (7 total)

### Fontaines D.C. (fontaines-dc.html)
- Hero image with overlay
- Event: Alexandra Palace, 27 Nov 2024
- 6 gallery photos
- Behind the show narrative
- Navigation: Back to Artists, Prev/Next

### The Royston Club (the-royston-club.html)
- Hero image with overlay
- Event: Roundhouse London, 15 Oct 2024
- 6 gallery photos
- Behind the show narrative

### Catfish and the Bottlemen (catfish-and-the-bottlemen.html)
- Hero image with overlay
- Event: O2 Academy Brixton, 8 Sep 2024
- 6 gallery photos
- Behind the show narrative

### The Smashing Pumpkins (the-smashing-pumpkins.html)
- Hero image with overlay
- Event: The O2 Arena London, 12 Aug 2024
- 6 gallery photos
- Behind the show narrative

### Wunderhorse (wunderhorse.html)
- Hero image with overlay
- Event: Thekla Bristol, 22 Jul 2024
- 6 gallery photos
- Behind the show narrative

### Inhaler (inhaler.html)
- Hero image with overlay
- Event: The Rescue Rooms Nottingham, 5 Jun 2024
- 6 gallery photos
- Behind the show narrative

### Arkayla (arkayla.html)
- Hero image with overlay
- Event: The Lexington London, 18 May 2024
- 6 gallery photos
- Behind the show narrative

## Link Flow

```
Home (index.html)
├── Artist Cards → artist page
├── Portfolio items → artist page
├── About → Contact section (smooth scroll)
└── Contact → mailto: / Instagram

Artist Pages
├── Back to Artists → index.html#artists
├── Next/Prev → next/previous artist page
├── Navigation → any main page
└── Social links → external

Navigation (All pages)
├── HARRIET ARNOLD → home
├── HOME → index.html
├── ARTISTS → index.html#artists
├── PORTFOLIO → index.html#portfolio
├── ABOUT → index.html#about
├── CONTACT → index.html#contact
├── Instagram → external
└── Email → mailto:
```

## Image Naming Convention

### Hero/Banner Images
- `hero-placeholder.jpg` - Homepage hero
- `artist-{name}-hero.jpg` - Artist page hero banner

### Card Images
- `artist-{name}.jpg` - Artist card on homepage

### Gallery Images
- `{artist-slug}-photo-{1-6}.jpg` - Individual photo in artist gallery

### Portrait Images
- `about-photo.jpg` - About section photographer image
- `portfolio-{1-3}.jpg` - Portfolio showcase images

## Responsive Design

### Desktop (1400px+)
- 3-column artist grid
- 2-column about section
- Fixed navbar
- Full hero section

### Tablet (1024px)
- 2-column artist grid
- Flexible layouts
- Adjusted padding/margins

### Mobile (768px)
- 1-column layouts
- Reduced font sizes
- Simplified navigation
- Touch-friendly spacing

### Small Mobile (480px)
- Full-width single column
- Minimal padding
- Large touch targets
- Optimized typography

## Color Usage

- **Background**: #0F1720 (primary), #1B2838 (secondary)
- **Accents**: #4F6D8A (primary blue), #7F95A8 (secondary blue)
- **Text**: #E8E4DD (cream), #BFC7D1 (light), #9AA6B8 (muted)
- **Hover**: Transitions from text-light to accent-blue

## Next Steps for Implementation

1. ✅ HTML structure complete
2. ✅ CSS styling complete
3. ✅ JavaScript interactions minimal but complete
4. ✅ Placeholder images generated
5. 🔄 **Replace with real photography**
6. 🔄 Update artist bios and descriptions
7. 🔄 Test on all devices
8. 🔄 Deploy to GitHub Pages
9. 🔄 Set up custom domain (if needed)
10. 🔄 SEO optimization (meta descriptions, etc)
