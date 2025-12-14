
# DataProbe Website Frontend

A modern, maintainable React + TypeScript frontend for the DataProbe multi-platform data validation website.

## Features

- ⚡️ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React with hooks
- 📘 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first styling
- 🧩 **Radix UI** - Accessible component primitives
- 📦 **Organized Structure** - Constants, types, and utilities separated

## Project Structure

```
src/
├── assets/          # Static assets (images, etc.)
├── components/      # React components
│   ├── ui/         # Reusable UI components (Radix-based)
│   └── ...         # Feature components
├── constants/       # Constants and configuration
│   ├── theme.ts    # Colors, spacing, typography
│   └── strings.ts  # String constants
├── types/          # TypeScript type definitions
├── styles/         # Global styles
└── utils/          # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:3000`

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

### Type Checking

```bash
npm run type-check
```

Runs TypeScript type checking without emitting files.

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally.

## Code Organization

### Constants

- **`src/constants/theme.ts`** - Theme constants (colors, spacing, typography)
- **`src/constants/strings.ts`** - String constants for consistent messaging

### Types

- **`src/types/index.ts`** - Shared TypeScript types and interfaces

### Components

Components are organized by feature. Each component:
- Uses constants from `@/constants` instead of hardcoded values
- Has proper TypeScript types
- Follows consistent naming conventions

## Configuration

- **`vite.config.ts`** - Vite configuration with path aliases
- **`tsconfig.json`** - TypeScript configuration
- **`package.json`** - Dependencies and scripts

## Path Aliases

The project uses `@` as an alias for `src/`:

```typescript
import { COLORS } from '@/constants/theme';
import type { PlanType } from '@/types';
```

## Original Design

The original Figma design is available at:
https://www.figma.com/design/NRaakgNinmZvOavBWoFesY/Multi-Platform-Data-Validation-Website
  