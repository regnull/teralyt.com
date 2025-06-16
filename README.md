# Teralyt Software LLC Website

This is the official website for Teralyt Software LLC, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Built with Next.js 14
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Optimized for Cloudflare Pages deployment

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/teralyt-website.git
cd teralyt-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to Cloudflare Pages

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)

3. Navigate to Pages > Create a project

4. Connect to your GitHub repository

5. Configure build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node.js version: 18.x

6. Click "Save and Deploy"

The site will be automatically deployed to a `*.pages.dev` domain. You can add a custom domain in the Cloudflare Pages settings.

## Project Structure

```
teralyt-website/
├── app/                # Next.js app directory
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── public/            # Static assets
├── components/        # React components
├── styles/           # Additional styles
└── package.json      # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved by Teralyt Software LLC.
