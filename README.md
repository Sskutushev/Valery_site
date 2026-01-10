# AI Management & Sales Landing Page

A modern, responsive landing page for an AI-powered management and sales platform with advanced animations and interactive features.

## Features

- **Responsive Design**: Works on all device sizes from mobile to desktop
- **Dark/Light Theme**: Toggle between color schemes with persistent storage
- **Multi-language Support**: Switch between Russian and English
- **Smooth Animations**: Sequential entrance animations for all elements
- **Interactive Elements**: Ripple effects on buttons, hover states
- **Accessible**: Full keyboard navigation and screen reader support
- **Performance Optimized**: Efficient code with minimal dependencies

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (ES6+)
- Modern CSS features (backdrop-filter, gradients)
- Intersection Observer API for animations
- Local Storage for theme persistence

## Project Structure

```
├── clean_index.html          # Main HTML structure
├── clean_styles.css          # All CSS styles and animations
├── clean_script.js           # All JavaScript functionality
├── image/                    # Image assets
│   ├── Logo.svg
│   ├── Union.svg
│   ├── chat.svg
│   ├── market.svg
│   └── Group*.svg
└── video/                    # Video assets
    └── background-video.mp4
```

## Setup Instructions

1. Clone the repository
2. Open `clean_index.html` in a modern browser
3. All dependencies are loaded via CDN links

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Animation Sequence

1. Main heading slides in from left
2. Description text slides in from left
3. CTA button slides up from bottom
4. Stats blocks slide up from bottom in sequence
5. Feature cards slide in from right
6. Pricing card slides up from bottom

## Customization

### Colors
- Primary: `#3372D3` (blue)
- Dark: `#474747` (gray)
- Background: `#FFFFFF` (white at 60% opacity)

### Typography
- Headings: Inter SemiBold
- Body: Inter Regular/Medium
- Labels: Public Sans SemiBold, Open Sans Regular

## Development Notes

This project follows modern web development best practices:
- Semantic HTML structure
- Mobile-first responsive design
- Progressive enhancement
- Accessibility-first approach
- Clean, modular JavaScript
- CSS custom properties ready (can be extended)

## License

This project is open source and available under the MIT License.