# MJS Web Design - HTML Template

This is a clean, standalone HTML/CSS/JS template converted from the WordPress site at https://mjswebdesign.com/

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern CSS**: Uses CSS Grid, Flexbox, and custom properties
- **Smooth Animations**: Intersection Observer API for scroll animations
- **Mobile-First**: Mobile navigation with hamburger menu
- **Accessible**: Proper focus states, ARIA labels, and keyboard navigation
- **Contact Form**: Working contact form with validation
- **SEO Friendly**: Semantic HTML structure
- **Fast Loading**: Optimized CSS and minimal JavaScript

## File Structure

```
mjswebdesign/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets (you need to add these)
│   ├── mjs-design-horiz2.png
│   ├── single-page-site.jpg
│   ├── business-site-template.jpg
│   ├── member-login-concept.jpg
│   └── about-photo.jpg
└── README.md           # This file
```

## Setup Instructions

1. **Download/Clone the files** to your web server or local development environment

2. **Add Images**: You'll need to add the following images to the `images/` folder:

   - `mjs-design-horiz2.png` - Logo image
   - `single-page-site.jpg` - Landing page service image
   - `business-site-template.jpg` - Business website service image
   - `member-login-concept.jpg` - Advanced website service image
   - `about-photo.jpg` - About section photo

3. **Customize Content**: Update the content in `index.html` to match your needs:

   - Contact information (phone numbers, email)
   - Service descriptions
   - About section text
   - Logo and images

4. **Customize Styling**: Modify `css/style.css` to match your brand:
   - Colors (see CSS custom properties at the top)
   - Fonts
   - Spacing
   - Layout

## Key Sections

### Header

- Fixed navigation with logo
- Mobile hamburger menu
- Call-to-action button

### Hero Section

- Eye-catching headline
- Service overview
- Call-to-action button

### Services Overview

- Grid of service cards with icons
- Hover effects and animations

### Services Detail

- Detailed service descriptions
- Images and content blocks
- Call-to-action buttons

### About Section

- Personal/company information
- Photo and description

### Contact Section

- Contact buttons (phone, text)
- Contact form with validation
- Responsive layout

### Footer

- Copyright information

## Customization

### Colors

The color scheme is defined using CSS custom properties in the `:root` selector:

```css
:root {
  --primary-color: #0274be;
  --secondary-color: #3a3a3a;
  --text-color: #4b4f58;
  --background-color: #f5f5f5;
  --white: #ffffff;
  --black: #000000;
  --border-color: #dddddd;
}
```

### Fonts

The template uses Google Fonts:

- **Manrope** for body text
- **Plus Jakarta Sans** for headings

### Contact Form

The contact form currently shows a success message. To make it functional, you'll need to:

1. Set up a server-side script to process form submissions
2. Update the form action and method
3. Implement proper form handling (PHP, Node.js, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with some feature degradation)

## Performance

- Optimized CSS with minimal specificity
- Efficient JavaScript with event delegation
- Smooth animations using CSS transforms
- Lazy loading ready (can be added)

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Color contrast compliant

## License

This template is created for MJS Web Design. Feel free to use and modify as needed.

## Support

For questions or support, contact:

- Phone: (424) 225-1294
- Website: https://mjswebdesign.com

---

**Note**: Remember to add your actual images to the `images/` folder and update the contact information and content to match your business needs.
#   m j s w e b d e s i g n  
 