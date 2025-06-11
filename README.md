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

- ✨ Modern, responsive design
- 🚀 Optimized performance with code splitting
- 📱 Mobile-first approach
- ♿ Accessibility compliant
- 🔍 SEO optimized
- 📊 Interactive data visualizations
- 📄 Comprehensive resource library
- 🔐 Enterprise-grade security focus

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
- Initial bundle: ~250KB (gzipped: ~73KB)
- Lazy loading for all resource pages
- Optimized images and assets

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

## License

© 2023 Previsάnt LLC. All rights reserved.

## Contact

For inquiries: info@previsant.com

---

Built with ❤️ by the Previsάnt team