# Environment Configuration Guide

All ports, URLs, and paths are now configured via environment variables. No hardcoded values remain.

## Backend Configuration

### Environment Variables (`backend/.env.local`)

```env
# Server Port (defaults to 3001 if not set)
PORT=3001

# Download Storage Path
DOWNLOAD_STORAGE_PATH=./storage/downloads

# Frontend URL for CORS (Option 1: Full URL - recommended)
FRONTEND_URL=http://localhost:3000

# Frontend URL Components (Option 2: Individual - used if FRONTEND_URL not set)
FRONTEND_HOST=localhost
FRONTEND_PORT=3000
FRONTEND_PROTOCOL=http
```

### Default Values

- **PORT**: `3001` (Next.js will use PORT env var or default to 3000, but we configure 3001)
- **FRONTEND_URL**: Constructed from components if not set: `http://localhost:3000`

## Frontend Configuration

### Environment Variables (`frontend/.env.local`)

```env
# Frontend Server Port (defaults to 3000 if not set)
VITE_PORT=3000
VITE_HOST=localhost

# Backend API URL (Option 1: Full URL - recommended)
VITE_API_URL=http://localhost:3001

# Backend API Components (Option 2: Individual - used if VITE_API_URL not set)
VITE_BACKEND_HOST=localhost
VITE_BACKEND_PORT=3001
VITE_BACKEND_PROTOCOL=http
```

### Default Values

- **VITE_PORT**: `3000`
- **VITE_API_URL**: Constructed from components if not set: `http://localhost:3001`

## Quick Setup

### 1. Backend Setup

```bash
cd backend
cp .env.example .env.local
# Edit .env.local and set:
# PORT=3001
# FRONTEND_URL=http://localhost:3000
npm run dev
```

Backend will run on port **3001** (or PORT env var value).

### 2. Frontend Setup

```bash
cd frontend
cp .env.example .env.local
# Edit .env.local and set:
# VITE_PORT=3000
# VITE_API_URL=http://localhost:3001
npm run dev
```

Frontend will run on port **3000** (or VITE_PORT env var value).

## How It Works

### Backend Port Configuration

Next.js automatically reads the `PORT` environment variable. If not set, it defaults to 3000, but we configure it to 3001 in `.env.local`.

### Frontend Port Configuration

Vite reads `VITE_PORT` from environment variables. The port is configured in `vite.config.ts`:

```typescript
server: {
  port: Number(process.env.VITE_PORT) || 3000,
  host: process.env.VITE_HOST || 'localhost',
}
```

### API URL Resolution

The frontend constructs the API URL in this order:

1. **VITE_API_URL** (if set) - Full URL
2. **Components** (if VITE_API_URL not set):
   - `VITE_BACKEND_PROTOCOL://VITE_BACKEND_HOST:VITE_BACKEND_PORT`
   - Defaults: `http://localhost:3001`
3. **Production fallback**: `window.location.origin`

### CORS Configuration

Backend constructs the frontend URL for CORS in this order:

1. **FRONTEND_URL** (if set) - Full URL
2. **Components** (if FRONTEND_URL not set):
   - `FRONTEND_PROTOCOL://FRONTEND_HOST:FRONTEND_PORT`
   - Defaults: `http://localhost:3000`

## Testing Configuration

Tests use environment variables with defaults:

```typescript
const TEST_BACKEND_HOST = process.env.TEST_BACKEND_HOST || 'localhost';
const TEST_BACKEND_PORT = process.env.TEST_BACKEND_PORT || '3001';
const TEST_BACKEND_PROTOCOL = process.env.TEST_BACKEND_PROTOCOL || 'http';
```

## Production Deployment

### Same Domain

```env
# Backend
PORT=3001
FRONTEND_URL=https://yourdomain.com

# Frontend
VITE_API_URL=  # Empty = use same origin
```

### Different Domains

```env
# Backend
PORT=3001
FRONTEND_URL=https://app.yourdomain.com

# Frontend
VITE_API_URL=https://api.yourdomain.com
```

## Verification

### Check Backend Port

```bash
# Should show port 3001 (or your PORT env var)
cd backend
npm run dev
# Look for: "Ready on http://localhost:3001"
```

### Check Frontend Port

```bash
# Should show port 3000 (or your VITE_PORT env var)
cd frontend
npm run dev
# Look for: "Local: http://localhost:3000/"
```

### Test API Connection

```bash
# Should connect to backend on port 3001
curl http://localhost:3001/api/downloads/macos
```

## Important Notes

✅ **No hardcoded ports** - All ports come from environment variables  
✅ **No hardcoded URLs** - All URLs are constructed from env vars  
✅ **No hardcoded paths** - Storage path uses DOWNLOAD_STORAGE_PATH  
✅ **Flexible configuration** - Supports both full URLs and component-based config  
✅ **Production ready** - Works for both development and production deployments  

---

**Status**: ✅ All configuration is environment-based!

