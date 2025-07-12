# Brooklyn Barber Co. 🏙️✂️

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF.svg)](https://vitejs.dev/)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, fully accessible barbershop booking application built with React and Vite. This application showcases classic Brooklyn barbering heritage while providing a comprehensive digital booking experience that meets WCAG 2.1 AA accessibility standards.

## 📖 Table of Contents
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#️-technical-stack)
- [Quick Start](#-getting-started)
- [Project Structure](#️-project-structure)
- [Meet Our Team](#-meet-our-barbers)
- [Accessibility](#️-accessibility-features)
- [Contributing](#-contributing)
- [Deployment](#-deployment)
- [License](#-license)

## 📺 Demo

> **Live Demo**: [View Application](https://umarbek98.github.io/brooklyn-barber) *(Coming Soon)*

### Screenshots

![Brooklyn Barber Co. Homepage](docs/screenshots/homepage.png)
*Modern barbershop booking interface with accessibility features*

![Booking Modal](docs/screenshots/booking-modal.png)
*Comprehensive booking form with calendar integration*

## 🌟 Features

### Core Functionality
- **Appointment Booking**: Complete booking system with date/time selection
- **Service Selection**: Individual services and premium packages with detailed descriptions
- **Barber Selection**: Choose from experienced master barbers with specialties
- **Appointment Management**: View, track, and cancel existing appointments
- **Interactive Calendar**: Visual date picker with availability checking
- **Real-time Validation**: Form validation with user-friendly error messages

### Accessibility Excellence
- **WCAG 2.1 AA Compliant**: Full compliance with web accessibility standards
- **Screen Reader Support**: Comprehensive ARIA labels and semantic HTML
- **Keyboard Navigation**: Complete keyboard accessibility with focus management
- **High Contrast Support**: Enhanced visibility for users with visual impairments
- **Reduced Motion Support**: Respects user motion preferences
- **Skip Links**: Quick navigation for assistive technologies

### Services Offered
- **Classic Cut** (45min) - $35
- **Beard Trim** (30min) - $25  
- **Straight Razor Shave** (60min) - $45
- **Mustache Trim** (15min) - $15
- **Hot Towel Treatment** (30min) - $20

### Premium Packages
- **👑 The Gentleman Package** (120min) - $75 *(Save $15)*
- **💼 Executive Package** (150min) - $95 *(Save $20)*
- **💈 Classic Combo** (105min) - $65 *(Save $15)*
- **⚡ Quick Touch-Up** (45min) - $35 *(Save $5)*

## 🏗️ Technical Stack

- **Frontend**: React 19.1.0 with modern hooks and functional components
- **Build Tool**: Vite 7.0.4 for fast development and optimized builds
- **Styling**: Custom CSS with accessibility enhancements
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for reliable date operations
- **Code Quality**: ESLint with React-specific rules

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Modern web browser with ES6+ support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/umarbek98/brooklyn-barber.git
   cd brooklyn-barber
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## 🏛️ Project Structure

```
barbershop/
├── src/
│   ├── components/          # React components
│   │   ├── BrooklynHeader.jsx      # Navigation header
│   │   ├── BrooklynHero.jsx        # Hero section
│   │   ├── BrooklynServices.jsx    # Services showcase
│   │   ├── BrooklynFooter.jsx      # Site footer
│   │   ├── BookingModal.jsx        # Main booking form
│   │   ├── ConfirmationModal.jsx   # Booking confirmation
│   │   ├── AppointmentsModal.jsx   # Appointment management
│   │   └── StoryModal.jsx          # Company history
│   ├── data/
│   │   └── barbershopData.js       # Barbers, services, packages
│   ├── assets/             # Images and static assets
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── styles.css         # Complete styling with accessibility
├── public/                # Static public assets
├── ACCESSIBILITY_IMPROVEMENTS.md  # Detailed accessibility documentation
└── package.json          # Project dependencies and scripts
```

## 👥 Meet Our Barbers

### Sofia Martinelli - Master Barber & Owner
- **Experience**: 12+ years
- **Specialties**: Classic Cuts, Modern Styles, Beard Artistry
- **Schedule**: Monday-Saturday, 9:00 AM - 6:00 PM

### Michael Martinelli - Senior Master Barber  
- **Experience**: 25+ years
- **Specialties**: Traditional Cuts, Straight Razor, Hot Towel
- **Schedule**: Monday-Friday, 10:00 AM - 5:00 PM

### Antonio "Tony" Benedetto - Founding Master Barber
- **Experience**: 45+ years
- **Specialties**: Classic Italian Style, Vintage Cuts, Mentorship
- **Schedule**: Tuesday, Thursday, Saturday, 11:00 AM - 4:00 PM

## ♿ Accessibility Features

This application demonstrates industry-leading accessibility practices:

- **Semantic HTML**: Proper landmarks, headings, and content structure
- **ARIA Integration**: Comprehensive labeling and state management
- **Focus Management**: Logical tab order and modal focus trapping
- **Screen Reader Optimization**: Hidden helper text and live regions
- **Keyboard Support**: Full keyboard navigation including custom controls
- **Visual Indicators**: High-contrast focus indicators and error states
- **Responsive Design**: Works across devices and zoom levels up to 200%

*For detailed accessibility documentation, see `ACCESSIBILITY_IMPROVEMENTS.md`*

## 🎨 Design Philosophy

Brooklyn Barber Co. embodies classic barbershop aesthetics with modern usability:

- **Color Palette**: Warm browns, gold accents, and cream backgrounds
- **Typography**: Bold, uppercase styling reflecting traditional signage  
- **Interactions**: Smooth animations with respect for motion preferences
- **Layout**: Clean, spacious design that prioritizes readability
- **Imagery**: Professional service photography with meaningful alt text

## 🔧 Development Features

- **Hot Module Replacement**: Instant updates during development
- **Code Splitting**: Optimized bundle sizes for faster loading
- **Tree Shaking**: Automatic removal of unused code
- **Modern JavaScript**: ES6+ features with Babel compilation
- **CSS Optimization**: Minification and vendor prefixing
- **Error Boundaries**: Graceful error handling in production

## 📱 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile**: iOS Safari 14+, Chrome Mobile 88+
- **Accessibility Tools**: Compatible with NVDA, JAWS, VoiceOver
- **Progressive Enhancement**: Core functionality works without JavaScript

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

### Quick Start for Contributors

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/brooklyn-barber.git
   cd brooklyn-barber
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and test**
   ```bash
   npm run dev    # Test locally
   npm run lint   # Check code quality
   npm run build  # Verify build works
   ```

4. **Commit with conventional format**
   ```bash
   git add .
   git commit -m "feat: add new booking feature"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Standards
- **Accessibility First**: Maintain WCAG 2.1 AA compliance
- **Component Patterns**: Follow existing Brooklyn* component naming
- **ARIA Labels**: Include proper semantic markup
- **Testing**: Test keyboard navigation and screen reader compatibility
- **Commits**: Use conventional commit messages (`feat:`, `fix:`, `docs:`, etc.)

### Development Workflow
```bash
# Start development
npm run dev

# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## � Deployment

### GitHub Pages (Recommended)
```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Manual Deployment
```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Upload contents to your web server
```

### Environment Variables
Create a `.env` file for custom configuration:
```env
VITE_APP_TITLE=Brooklyn Barber Co.
VITE_CONTACT_PHONE=(718) 555-CUTS
VITE_CONTACT_ADDRESS=Brooklyn, NY
```

## �📞 Contact Information

## 📞 Contact Information

**Brooklyn Barber Co.**  
📍 Brooklyn, NY  
📞 (718) 555-CUTS  
🕐 Tuesday-Saturday: 9:00 AM - 6:00 PM

## 🐛 Issues & Support

- **Bug Reports**: [Create an Issue](https://github.com/umarbek98/brooklyn-barber/issues/new?template=bug_report.md)
- **Feature Requests**: [Request a Feature](https://github.com/umarbek98/brooklyn-barber/issues/new?template=feature_request.md)
- **Accessibility Issues**: [Report Accessibility Bug](https://github.com/umarbek98/brooklyn-barber/issues/new?template=accessibility.md)

## 📈 Project Stats

![GitHub stars](https://img.shields.io/github/stars/umarbek98/brooklyn-barber?style=social)
![GitHub forks](https://img.shields.io/github/forks/umarbek98/brooklyn-barber?style=social)
![GitHub issues](https://img.shields.io/github/issues/umarbek98/brooklyn-barber)
![GitHub last commit](https://img.shields.io/github/last-commit/umarbek98/brooklyn-barber)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Accessibility Community**: For WCAG guidelines and best practices
- **React Team**: For the amazing React framework
- **Vite Team**: For the lightning-fast build tool
- **Brooklyn Barber Heritage**: Inspired by authentic Brooklyn barbershop traditions

## 🔗 Related Projects

- [Accessibility Improvements Documentation](ACCESSIBILITY_IMPROVEMENTS.md)
- [Component Style Guide](docs/STYLE_GUIDE.md) *(Coming Soon)*
- [API Documentation](docs/API.md) *(Coming Soon)*

---

*"Where Tradition Meets Style" - Serving Brooklyn since 1952*

**Built with ❤️ using React + Vite**

---

### ⭐ Star this repository if you found it helpful!
