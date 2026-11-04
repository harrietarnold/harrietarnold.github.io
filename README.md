# Harriet Arnold - Concert Photography Website

A modern, dark-themed concert photography portfolio website built with pure HTML, CSS, and minimal JavaScript.

## Features

✨ **Design Highlights**
- Dark, atmospheric editorial magazine aesthetic
- Muted blue color palette (#0F1720, #1B2838, #4F6D8A, #7F95A8)
- Elegant typography (Cormorant Garamond for headings, Inter for body)
- Fully responsive and mobile-optimized
- Smooth scroll effects and hover interactions
- Minimal, performant JavaScript

## File Structure

```
harrietarnold.github.io.git/
├── index.html                          # Homepage
├── css/
│   └── style.css                       # Complete styling
├── js/
│   └── main.js                         # Minimal interactivity (smooth scroll, nav effects)
├── artists/
│   ├── fontaines-dc.html
│   ├── the-royston-club.html
│   ├── catfish-and-the-bottlemen.html
│   ├── the-smashing-pumpkins.html
│   ├── wunderhorse.html
│   ├── inhaler.html
│   └── arkayla.html
├── img/                                # Placeholder images (61 total)
│   ├── hero-placeholder.jpg
│   ├── artist-*.jpg                    # 7 artist card images
│   ├── artist-*-hero.jpg               # 7 artist hero images
│   ├── portfolio-*.jpg                 # 3 portfolio images
│   ├── *-photo-*.jpg                   # 42 gallery photos (6 per artist)
│   └── about-photo.jpg
└── README.md                           # This file
```

## Pages

### Homepage (index.html)
- **Navigation Bar**: Fixed header with branding, navigation links, and social icons
- **Hero Section**: Full-screen featured image with dramatic typography
- **Featured Artists Grid**: 7 artist cards linking to individual artist pages
- **About Section**: Photographer bio with accompanying image
- **Portfolio Section**: 3-image grid showcasing recent work
- **Contact Section**: Email, Instagram, and location information
- **Footer**: Navigation links and social media

### Artist Pages (artists/*.html)
Each artist has a dedicated page featuring:
- **Artist Hero**: Full-width banner image with title
- **Navigation**: Back to artists link, prev/next artist navigation
- **Artist Info**: Event details, date, and categories
- **Photo Gallery**: 6-image grid of concert photos
- **Behind The Show**: Narrative description of the photography experience

Artists included:
1. Fontaines D.C.
2. The Royston Club
3. Catfish and the Bottlemen
4. The Smashing Pumpkins
5. Wunderhorse
6. Inhaler
7. Arkayla

## Design System

### Color Palette
```
--bg-primary:      #0F1720  (Deep navy background)
--bg-secondary:    #1B2838  (Slightly lighter background)
--accent-blue:     #4F6D8A  (Primary accent)
--blue-grey:       #7F95A8  (Secondary accent)
--text-cream:      #E8E4DD  (Primary text)
--text-light:      #BFC7D1  (Secondary text)
--text-muted:      #9AA6B8  (Muted text)
```

### Typography
- **Headings**: Cormorant Garamond (elegant, editorial)
- **Body/Navigation**: Inter (clean, modern, professional)
- **Letter spacing**: Enhanced for editorial aesthetic

### Responsive Breakpoints
- Desktop: Full layout
- Tablet (1024px): Adjusted grid columns, flexible spacing
- Mobile (768px): Single-column layouts, reduced font sizes
- Small mobile (480px): Optimized for smallest screens

## JavaScript

Minimal JavaScript (only ~1.2KB) handles:
- Smooth scrolling for anchor links
- Navigation bar scroll effects (border color enhancement)
- Intersection Observer for lazy-load ready images

## Image Placeholders

All 61 placeholder images have been pre-generated with:
- Correct dimensions for each context
- Brand colors (#0F1720, #1B2838, #4F6D8A)
- Descriptive labels

**Replace placeholder images with actual photography before launch.**

Image dimensions:
- Hero: 1400×700px
- Artist Cards: 400×400px
- Artist Hero: 1400×500px
- Portfolio: 800×500px
- About: 500×625px
- Gallery Photos: 400×400px

## Getting Started

### Development
1. Clone the repository
2. Open `index.html` in your browser
3. Replace placeholder images in `/img` with actual photography
4. Update artist details and descriptions as needed
5. Test on mobile devices and various screen sizes

### Deployment
The site is static HTML/CSS/JS and deploys directly to GitHub Pages or any static host.

```bash
# Push to GitHub Pages
git add .
git commit -m "Update with new photography"
git push origin main
```

## Customization

### Update Artist Information
Edit the artist page files in `/artists/` to update:
- Event venue and date
- Photo descriptions
- "Behind the Show" narratives
- Navigation links between artists

### Modify Colors
Update CSS variables in `/css/style.css`:
```css
:root {
    --bg-primary: #0F1720;
    --accent-blue: #4F6D8A;
    /* ... etc */
}
```

### Add New Content
- Add new artist pages following the existing template
- Add new images to `/img/`
- Update navigation links across all pages

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **No external dependencies**: Only Google Fonts
- **No frameworks**: Pure HTML/CSS/JS
- **Fast load times**: Optimized for lighthouse metrics
- **SEO friendly**: Semantic HTML, proper meta tags

## Future Enhancements

Potential additions without breaking the static architecture:
- Contact form (requires backend or 3rd-party service)
- Image lightbox gallery
- Blog section
- Testimonials carousel
- Search functionality

## License

© 2024 Harriet Arnold. All rights reserved.

## Contact

- Email: harrietarnoldphoto@gmail.com
- Instagram: @harrietarnoldphoto
- Location: UK
