# Deployment Instructions - Public Folder Downloads

## ✅ Setup Complete!

Your download system is now configured to serve files from `/frontend/public/download/`

## 📁 Files Ready:
- ✅ `DataProbe-apple-silicon.dmg` (162 MB)
- ✅ `DataProbe-intel.dmg` (167 MB)

## 🚀 Next Steps to Deploy:

### 1. Add Files to Git:
```bash
cd /Users/quangtran/Documents/projects/data_probe_website

# Add the download files
git add frontend/public/download/

# Commit
git commit -m "Add macOS DMG installers for download"

# Push to GitHub
git push
```

### 2. Vercel Auto-Deploys:
Once you push, Vercel will automatically:
- Deploy your changes
- Serve files from your domain
- Make downloads available at:
  - `https://yourdomain.com/download/DataProbe-apple-silicon.dmg`
  - `https://yourdomain.com/download/DataProbe-intel.dmg`

## ⚠️ Important File Size Warning:

Your DMG files are **329 MB total**. While this will work, be aware:

**Potential Issues:**
- ⚠️ Large git repository (slow clone/pull)
- ⚠️ Longer deployment times
- ⚠️ May hit Vercel's deployment size limits

**Recommended Alternative (GitHub Releases):**
If you encounter issues, I recommend using GitHub Releases instead:

```bash
# Create a .gitignore to exclude DMG files
echo "*.dmg" >> frontend/public/download/.gitignore
git add frontend/public/download/.gitignore
git commit -m "Ignore DMG files in public folder"

# Then upload DMGs to GitHub Releases manually
# Update URLs in frontend/src/utils/download.ts to point to GitHub
```

## 🧪 Testing Locally:

Test before deploying:
```bash
cd frontend
npm run dev
```

Then click the Download button on your site - it should download from `/download/`

## 📝 Current Configuration:

**Code Updated:**
- ✅ `frontend/src/utils/download.ts` - Points to `/download/` folder
- ✅ Files renamed to match expected names
- ✅ README added to download folder

**Download URLs:**
- Apple Silicon: `/download/DataProbe-apple-silicon.dmg`
- Intel: `/download/DataProbe-intel.dmg`

## ✨ You're Ready!

Just run the git commands above and Vercel will handle the rest!
