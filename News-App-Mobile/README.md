# News App - Mobile Design

This folder contains a mobile-first news application with dark mode support and accessibility features.

## Files Included

### `news-app-mobile.html`
A complete mobile news app with the following features:

## Features

### 🌓 Dark Mode Toggle
- Smooth theme switching between light and dark modes
- Theme preference saved in localStorage
- WCAG AA compliant contrast ratios in both modes

### 📱 Mobile-First Design
- Optimized for mobile devices only
- Touch-friendly interface
- Bottom navigation for easy thumb access
- Swipe-friendly article cards

### ♿ Accessibility
- WCAG AA contrast standards met
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- Reduced motion support

### 📖 Reading Experience
- Full-screen article reading view
- Optimized typography for long-form content
- Merriweather font for article body text
- Inter font for UI elements
- Line height optimized for readability (1.6-1.8)

### 🎨 Features
- Category filtering (All, Tech, Sports, Business, Politics)
- Search functionality
- Article cards with images and metadata
- Share and bookmark actions
- Smooth animations and transitions

## How to View

1. Open `news-app-mobile.html` in a mobile browser or
2. Use Chrome DevTools (F12) → Toggle device toolbar to simulate mobile view
3. Test the dark mode toggle in the header
4. Tap any article to open the full reading screen

## Design Specifications

### Color Scheme
- **Light Mode**: White backgrounds with dark text (#1A1A1A)
- **Dark Mode**: Dark backgrounds (#121212) with light text (#FFFFFF)
- **Contrast Ratios**: All meet WCAG AA standards (4.5:1 minimum)

### Typography
- **Headings**: Merriweather (serif) - 1.4rem to 1.8rem
- **Body Text**: Merriweather (serif) - 1.1rem
- **UI Elements**: Inter (sans-serif) - 0.9rem to 1rem

### Mobile Optimizations
- Font size: 16px minimum (prevents iOS zoom)
- Touch targets: Minimum 44x44px
- Viewport: Fixed at device width, no scaling
- Smooth scrolling enabled

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Media Queries)
- JavaScript (Vanilla JS)
- Google Fonts (Inter, Merriweather)

## Browser Support

- Modern mobile browsers (Chrome, Safari, Firefox)
- iOS Safari 12+
- Android Chrome 80+

