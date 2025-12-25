# Download Setup Guide - No Backend Required

Your frontend is now configured to handle downloads without a backend! Here are your options:

## Option 1: GitHub Releases (Recommended - FREE)

**Best for:** Open source projects, versioning, professional distribution

### Steps:
1. **Create a GitHub Release:**
   ```bash
   # Go to your GitHub repository
   # Click on "Releases" → "Create a new release"
   # Tag: v0.1.0 (or your version)
   # Upload your DMG files:
   - DataProbe-apple-silicon.dmg
   - DataProbe-intel.dmg
   ```

2. **Update the download URLs in `frontend/src/utils/download.ts`:**
   ```typescript
   const DOWNLOAD_URLS = {
     macos: {
       'apple-silicon': 'https://github.com/YOUR_USERNAME/YOUR_REPO/releases/latest/download/DataProbe-apple-silicon.dmg',
       'intel': 'https://github.com/YOUR_USERNAME/YOUR_REPO/releases/latest/download/DataProbe-intel.dmg',
     },
   };
   ```

3. **Deploy to Vercel** - Done! ✅

**Pros:**
- ✅ Free
- ✅ Unlimited bandwidth
- ✅ Version control built-in
- ✅ Automatic CDN distribution
- ✅ Professional and commonly used

---

## Option 2: Vercel Public Folder (Simple but Limited)

**Best for:** Small files, testing, quick setup

### Steps:
1. **Add files to public folder:**
   ```bash
   mkdir -p frontend/public/downloads
   # Copy your DMG files to this folder
   cp DataProbe-apple-silicon.dmg frontend/public/downloads/
   cp DataProbe-intel.dmg frontend/public/downloads/
   ```

2. **Update the download URLs in `frontend/src/utils/download.ts`:**
   ```typescript
   const DOWNLOAD_URLS = {
     macos: {
       'apple-silicon': '/downloads/DataProbe-apple-silicon.dmg',
       'intel': '/downloads/DataProbe-intel.dmg',
     },
   };
   ```

3. **Deploy to Vercel** - Files will be served from your domain

**Pros:**
- ✅ Very simple
- ✅ No external dependencies

**Cons:**
- ❌ Large files in git repository (not recommended for >100MB)
- ❌ Slower git clone/push
- ❌ May hit Vercel's deployment size limits

---

## Option 3: External CDN/Cloud Storage (Scalable)

**Best for:** Production apps, large files, advanced analytics

### Free Options:
1. **Cloudflare R2** (10GB free)
2. **AWS S3** (5GB free for 12 months)
3. **Google Cloud Storage** (5GB free)
4. **Backblaze B2** (10GB free)

### Steps:
1. **Upload files to your chosen storage**
2. **Make files publicly accessible**
3. **Get the public URLs**
4. **Update `frontend/src/utils/download.ts`:**
   ```typescript
   const DOWNLOAD_URLS = {
     macos: {
       'apple-silicon': 'https://your-cdn.com/DataProbe-apple-silicon.dmg',
       'intel': 'https://your-cdn.com/DataProbe-intel.dmg',
     },
   };
   ```

**Pros:**
- ✅ Scalable
- ✅ Fast global CDN
- ✅ Analytics available
- ✅ Large file support

**Cons:**
- ⚠️ Setup required
- ⚠️ May need payment method (even for free tier)

---

## Current Configuration

Your code is already updated! The download utility at `frontend/src/utils/download.ts` now:
- ✅ Supports direct download URLs
- ✅ Works without a backend
- ✅ Handles Intel and Apple Silicon separately
- ✅ Opens download in new tab

### What You Need To Do:

1. **Choose an option above** (I recommend GitHub Releases)
2. **Upload your DMG files**
3. **Update the URLs** in `frontend/src/utils/download.ts` (lines 12-19)
4. **Push to GitHub and deploy to Vercel**

That's it! No backend needed! 🎉

---

## Example: GitHub Releases Setup

If your repo is: `https://github.com/yourusername/dataprobe`

Your download URLs will be:
```
https://github.com/yourusername/dataprobe/releases/latest/download/DataProbe-apple-silicon.dmg
https://github.com/yourusername/dataprobe/releases/latest/download/DataProbe-intel.dmg
```

The `/latest/` part automatically points to your newest release, so you don't need to update URLs when you release new versions!
