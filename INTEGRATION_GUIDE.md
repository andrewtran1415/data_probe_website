# Frontend-Backend Integration Guide

## ✅ Integration Complete

The frontend and backend are now fully integrated! All download buttons throughout the site now connect to the backend API.

## What's Integrated

### Components with Download Functionality

1. **Hero Component** (`src/components/Hero.tsx`)
   - "Download for macOS" button → Calls API
   - Loading state with spinner
   - Error handling with toast notifications

2. **Header Component** (`src/components/Header.tsx`)
   - "Download" button in navigation → Calls API
   - Loading state
   - Error handling

3. **CTA Component** (`src/components/CTA.tsx`)
   - "Download for macOS" button → Calls API
   - Loading state
   - Error handling

## Setup Instructions

### 1. Backend Setup

```bash
cd backend

# Create environment file
cp .env.example .env.local

# Edit .env.local and set:
# PORT=3000 (or your preferred port)
# FRONTEND_URL=http://localhost:5173 (or your frontend URL)

# Start backend
npm run dev
```

Backend will run on `http://localhost:3000` (or your configured PORT)

### 2. Frontend Setup

```bash
cd frontend

# Create environment file
cp .env.example .env.local

# Edit .env.local and set:
# VITE_API_URL=http://localhost:3000 (match your backend port)

# Start frontend
npm run dev
```

Frontend will run on `http://localhost:5173` (or next available port)

### 3. Add DMG File

Place your DMG file at:
```
backend/storage/downloads/macos/dataprobe-latest.dmg
```

## How It Works

### Flow Diagram

```
User clicks "Download for macOS"
    ↓
Frontend: downloadFile('macos')
    ↓
Fetch: GET http://localhost:3000/api/downloads/macos
    ↓
Backend: Streams DMG file
    ↓
Frontend: Creates blob and triggers download
    ↓
File downloads to user's computer
```

### API Communication

**Request:**
```typescript
GET http://localhost:3000/api/downloads/macos?version=latest
```

**Response (Success):**
- Status: 200
- Headers:
  - `Content-Type: application/x-apple-diskimage`
  - `Content-Disposition: attachment; filename="dataprobe-latest.dmg"`
  - `Content-Length: <file-size>`
- Body: File stream (DMG binary data)

**Response (Error):**
```json
{
  "error": {
    "code": "FILE_NOT_FOUND",
    "message": "The requested DMG file is not available",
    "details": { "version": "latest" }
  }
}
```

## CORS Configuration

CORS is configured to allow requests from the frontend:

**Backend** (`next.config.ts`):
- Allows requests from `FRONTEND_URL` environment variable
- Defaults to `http://localhost:5173` in development

**Frontend** (`src/utils/download.ts`):
- Uses `VITE_API_URL` environment variable
- Defaults to `http://localhost:3000` in development

## Testing the Integration

### 1. Test from Browser

1. Start both servers:
   ```bash
   # Terminal 1
   cd backend && npm run dev
   
   # Terminal 2
   cd frontend && npm run dev
   ```

2. Open frontend in browser: `http://localhost:5173`

3. Click any "Download for macOS" button

4. Verify:
   - Button shows loading state
   - File downloads (or shows error if file missing)
   - Toast notification appears

### 2. Test API Directly

```bash
# Test download
curl http://localhost:3000/api/downloads/macos -o test.dmg

# Test error handling (file not found)
curl http://localhost:3000/api/downloads/macos?version=999.999.999

# Test invalid version
curl "http://localhost:3000/api/downloads/macos?version=invalid"
```

### 3. Check Browser Console

Open browser DevTools (F12) and check:
- Network tab: Should see request to `/api/downloads/macos`
- Console: Should see no CORS errors
- Application tab: Check if file downloads

## Troubleshooting

### CORS Errors

**Error:** `Access to fetch at 'http://localhost:3000/...' from origin 'http://localhost:5173' has been blocked by CORS policy`

**Solution:**
1. Check `backend/.env.local` has `FRONTEND_URL=http://localhost:5173`
2. Check `frontend/.env.local` has `VITE_API_URL=http://localhost:3000`
3. Restart both servers after changing env files

### File Not Found

**Error:** Toast shows "The requested DMG file is not available"

**Solution:**
1. Ensure DMG file exists at `backend/storage/downloads/macos/dataprobe-latest.dmg`
2. Check file permissions
3. Verify `DOWNLOAD_STORAGE_PATH` in backend `.env.local`

### Network Errors

**Error:** `Failed to fetch` or `Network request failed`

**Solution:**
1. Verify backend is running: `curl http://localhost:3000/api/downloads/macos`
2. Check port numbers match in both `.env.local` files
3. Check firewall/antivirus isn't blocking requests

### Download Doesn't Start

**Symptoms:** Button shows loading but no download

**Solution:**
1. Check browser console for errors
2. Verify file size isn't 0 bytes
3. Check browser download settings (some browsers block auto-downloads)

## Environment Variables Summary

### Backend (`backend/.env.local`)
```env
PORT=3000
DOWNLOAD_STORAGE_PATH=./storage/downloads
FRONTEND_URL=http://localhost:5173
```

### Frontend (`frontend/.env.local`)
```env
VITE_API_URL=http://localhost:3000
```

## Production Deployment

For production:

1. **Same Domain:**
   - Deploy frontend and backend on same domain
   - Set `VITE_API_URL` to relative path: `VITE_API_URL=`
   - Or use same origin: `VITE_API_URL=https://yourdomain.com`

2. **Different Domains:**
   - Set `FRONTEND_URL` in backend to production frontend URL
   - Set `VITE_API_URL` in frontend to production backend URL
   - Ensure CORS is properly configured

## Next Steps

- [ ] Add actual DMG file to storage
- [ ] Test end-to-end download flow
- [ ] Configure production URLs
- [ ] Add analytics tracking (optional)
- [ ] Implement rate limiting (optional)

---

**Status**: ✅ **FULLY INTEGRATED AND READY TO USE**

