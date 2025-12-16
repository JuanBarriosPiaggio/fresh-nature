# Fresh Nature - Natural Products Website

A modern, responsive website for Fresh Nature's natural product line, built with Next.js 14, TypeScript, and Tailwind CSS.

## Products

- **Natural Deodorant** - Aluminum-free, long-lasting protection
- **Hand Wash** - Gentle antibacterial formula
- **Dishwashing Soap** - Natural grease-cutting power
- **Natural Shampoo** - Sulfate-free hair care

## Features

- ✅ Responsive design (mobile-friendly)
- ✅ Individual product pages
- ✅ SEO optimized (sitemap, robots.txt, llms.txt)
- ✅ Docker configuration for Railway deployment
- ✅ Modern UI with green/blue/black color scheme
- ✅ TypeScript for type safety

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Docker Deployment on Railway

1. Push your code to a Git repository (GitHub, GitLab, etc.)

2. Connect your repository to Railway

3. Railway will automatically detect the Dockerfile and build the container

4. Set environment variables if needed:
   - `NEXT_PUBLIC_BASE_URL` - Your production URL (e.g., `https://your-app.railway.app`)

5. Deploy!

The Dockerfile is configured for production with:
- Multi-stage build for optimized image size
- Standalone Next.js output
- Proper user permissions
- Port 3000 exposed

## Logo

The logo (green leaf and blue water droplet) is located at `/public/logo.svg`. Replace this with your actual logo image if you have a PNG/JPG version. The SVG is used for:
- Favicon
- Open Graph images
- Site branding

## Project Structure

```
├── app/
│   ├── components/      # Header and Footer components
│   ├── products/        # Dynamic product pages
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   ├── globals.css      # Global styles
│   ├── sitemap.ts       # Dynamic sitemap generation
│   └── robots.ts        # Robots.txt configuration
├── public/
│   ├── logo.svg         # Logo file
│   └── llms.txt         # LLMs.txt file
├── Dockerfile           # Docker configuration
└── package.json         # Dependencies
```

## Color Scheme

Based on the logo:
- **Nature Green**: `#5a8f5a` - Primary green color
- **Nature Teal**: `#6bb3c0` - Blue/teal accent color
- **Nature Dark**: `#000000` - Black background
- **Nature Light**: `#f5f5f5` - Light background

## SEO Files

- **sitemap.xml** - Automatically generated at `/sitemap.xml`
- **robots.txt** - Available at `/robots.txt`
- **llms.txt** - Available at `/llms.txt`

## License

All rights reserved © Fresh Nature

