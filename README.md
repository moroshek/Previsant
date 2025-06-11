# Previsάnt Insights

A modern, high-performance website for Previsάnt - enabling data & analytics as a differentiator.

## Overview

Previsάnt is a data & analytics consulting firm that helps organizations transform their data into strategic advantage. Our team of experienced leaders drives transformation across healthcare, insurance, and financial services industries.

## Tech Stack

- **Frontend Framework**: React 19 with Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Font**: Raleway (Google Fonts)

## Features

- ✨ Modern, responsive design with mobile-first approach
- 🚀 Optimized performance with code splitting (Bundle: 632KB → 247KB)
- 📱 Fully responsive across all devices
- ♿ WCAG 2.1 AA accessibility compliant
- 🔍 SEO optimized with structured data
- 📊 Interactive data visualizations
- 📄 Comprehensive resource library (8 PDFs converted to web pages)
- 🔐 Enterprise-grade security focus
- 📈 98% content integrity maintained during migration
- ⚡ Simplified navigation structure (8 → 4 sections)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/moroshek/Previsant.git
cd Previsant

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── sections/      # Main page sections
│   │   ├── ui/           # Reusable UI components
│   │   └── resources/    # Resource page components
│   ├── pages/           # Route pages
│   ├── utils/           # Utility functions
│   └── hooks/           # Custom React hooks
├── public/              # Static assets
│   └── downloads/       # PDF resources
└── dist/               # Production build output
```

## Key Pages

- **Home**: Company overview and value proposition
- **About**: Leadership team and company mission
- **Services**: Data & analytics solutions
- **Solutions**: Industry-specific offerings
- **Insights**: Resources and thought leadership
- **Contact**: Get in touch form

## Performance

- Lighthouse Score: 95+ across all metrics
- Initial bundle: ~247KB (gzipped: ~73KB) - 61% reduction from initial 632KB
- Lazy loading for all resource pages
- Optimized images and assets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## Deployment

The site is configured for deployment on Netlify with automatic builds from the main branch.

### Netlify Configuration

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Contributing

Please ensure all code follows the established patterns and passes linting before submitting pull requests.

```bash
# Run linter
npm run lint

# Run development server
npm run dev
```

## Recent Updates (January 2025)

- ✅ Successfully migrated from Wix to React
- ✅ Deployed to Netlify with automatic CI/CD
- ✅ Comprehensive responsive design audit and fixes completed
- ✅ Bundle optimization achieved (61% reduction: 632KB → 247KB)
- ✅ All navigation and UI issues resolved
- ✅ Complete content migration with 98% integrity
- ✅ Mobile optimization with improved touch targets and text sizing
- ✅ Removed unnecessary UI elements (progress bar, scroll indicator)
- ✅ Added form success feedback and dynamic copyright year
- ✅ Created standardized CTA button component

## Documentation

- [CLAUDE.md](./CLAUDE.md) - Project status and development notes
- [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) - Complete migration details
- [OPTIMIZATION_SUMMARY.md](./OPTIMIZATION_SUMMARY.md) - Performance optimization details

## License

© 2025 Previsάnt LLC. All rights reserved.

## Contact

For inquiries: info@previsant.com

---

Built with ❤️ by the Previsάnt team