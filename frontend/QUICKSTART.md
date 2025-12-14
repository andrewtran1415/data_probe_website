# Quick Start Guide

## Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager

## Step-by-Step Instructions

### 1. Navigate to the frontend directory

```bash
cd /Users/quangtran/Documents/projects/data_probe_website/frontend
```

### 2. Install dependenciessss

```bash
npm install
```

This will install all required packages including React, Vite, TypeScript, Tailwind CSS, and Radix UI components.

### 3. Start the development server

```bash
npm run dev
```

The development server will start and you should see output like:

```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### 4. Open in browser

Open your browser and navigate to:
```
http://localhost:3000
```

The app should now be running! 🎉

## Available Scripts

- **`npm run dev`** - Start development server (hot reload enabled)
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run type-check`** - Run TypeScript type checking
- **`npm run lint`** - Run ESLint

## Troubleshooting

### Port already in use?

If port 3000 is already in use, Vite will automatically try the next available port (3001, 3002, etc.). Check the terminal output for the actual URL.

### Dependencies not installing?

Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors?

Run type checking:
```bash
npm run type-check
```

Most errors should be resolved after installing dependencies. If you see errors in `src/components/ui/*` files, they're likely from Figma-generated code and won't affect runtime.

## What's Next?

- The app will automatically reload when you make changes
- Check the browser console for any runtime errors
- Modify components in `src/components/` to see changes instantly

