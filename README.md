# Marc Trösken - Personal Website

Modern personal website built with Nuxt 4 and Tailwind CSS, showcasing cloud engineering leadership and expertise.

## Features

- ⚡ Built with Nuxt 4 and Vue 3
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🐳 Docker ready
- 🚀 GitHub Actions CI/CD
- ♿ Accessible and SEO optimized

## Prerequisites

- Node.js 20 or higher
- npm or yarn

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

Generate production build:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Docker

### Build Docker Image

```bash
docker build -t marc-troesken-website .
```

### Run Docker Container

```bash
docker run -p 3000:3000 marc-troesken-website
```

The site will be available at `http://localhost:3000`

## Deployment

### GitHub Actions

The project includes a GitHub Actions workflow that:
- Builds the application on every push
- Creates and pushes Docker images to GitHub Container Registry
- Runs on main branch pushes

To enable:
1. Push code to GitHub
2. Enable GitHub Actions in repository settings
3. GitHub Packages will automatically receive Docker images

### Manual Deployment

1. Build Docker image:
```bash
docker build -t marc-troesken-website .
```

2. Tag for your registry:
```bash
docker tag marc-troesken-website your-registry/marc-troesken-website:latest
```

3. Push to registry:
```bash
docker push your-registry/marc-troesken-website:latest
```

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── build-deploy.yml  # GitHub Actions workflow
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── pages/
│   └── index.vue             # Main page
├── public/
│   └── marc-troesken.jpg     # Profile photo
├── app.vue                   # App entry point
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.ts        # Tailwind configuration
├── Dockerfile                # Docker configuration
└── package.json              # Dependencies

```

## Customization

### Update Content

Edit `pages/index.vue` to update:
- Career positions
- Skills and competencies
- Contact information
- Social media links

### Update Styling

Modify `tailwind.config.ts` to customize:
- Color scheme
- Typography
- Spacing
- Breakpoints

### Update Photo

Replace `public/marc-troesken.jpg` with your own photo.

## Tech Stack

- **Framework**: Nuxt 4
- **UI Library**: Vue 3
- **Styling**: Tailwind CSS
- **Icons**: Nuxt Icon
- **Build Tool**: Vite
- **Package Manager**: npm

## License

© 2025 Marc Trösken. All rights reserved.
