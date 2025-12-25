# GitHub Releases Setup - Fix for Large File Error

## ✅ Problem Solved!

GitHub blocks files over 100MB. Your DMG files are 162MB and 167MB, so we'll use **GitHub Releases** instead (free, unlimited bandwidth, and designed for this!).

## 🎯 What I Did:

1. ✅ Removed DMG files from git staging
2. ✅ Added `.gitignore` to exclude DMG files
3. ✅ Updated download URLs to use GitHub Releases

## 🚀 Steps to Complete Setup:

### Step 1: Push Your Code (No DMG Files)

```bash
cd /Users/quangtran/Documents/projects/data_probe_website

# Check status - DMG files should NOT appear
git status

# Add and commit the code changes
git add .
git commit -m "Update download system to use GitHub Releases"
git push
```

✅ This will push successfully (no large files!)

---

### Step 2: Create a GitHub Release

1. **Go to your GitHub repository:**
   ```
   https://github.com/andrewtran1415/data_probe_website/releases
   ```

2. **Click "Create a new release"**

3. **Fill in the release details:**
   - **Tag version:** `v0.1.0` (or whatever version you want)
   - **Release title:** `DataProbe v0.1.0 - Beta Release`
   - **Description:**
     ```
     ## DataProbe v0.1.0 - Beta Release

     Download the installer for your Mac:
     - **Apple Silicon** (M1, M2, M3, M4): DataProbe-apple-silicon.dmg
     - **Intel**: DataProbe-intel.dmg

     ### Installation
     1. Download the appropriate DMG for your Mac
     2. Open the DMG file
     3. Drag DataProbe to Applications
     4. Launch and enjoy!
     ```

4. **Upload Files:**
   - Click "Attach binaries by dropping them here or selecting them"
   - Upload these two files:
     - `/Users/quangtran/Documents/projects/data_probe_website/frontend/public/download/DataProbe-apple-silicon.dmg`
     - `/Users/quangtran/Documents/projects/data_probe_website/frontend/public/download/DataProbe-intel.dmg`

5. **Click "Publish release"**

---

### Step 3: Test Your Downloads

1. **Wait for Vercel to deploy** (after you pushed in Step 1)

2. **Visit your website** and click the Download button

3. **Downloads will now come from GitHub Releases!** 🎉

---

## 📝 How It Works:

**Your Download URLs (already configured):**
```
https://github.com/andrewtran1415/data_probe_website/releases/latest/download/DataProbe-apple-silicon.dmg
https://github.com/andrewtran1415/data_probe_website/releases/latest/download/DataProbe-intel.dmg
```

The `/latest/` in the URL means:
- ✅ Always downloads the newest release
- ✅ You don't need to update URLs when releasing new versions
- ✅ Just create a new release and upload new files!

---

## 🎁 Benefits of GitHub Releases:

- ✅ **FREE** - No cost, unlimited bandwidth
- ✅ **Fast** - Global CDN distribution
- ✅ **Professional** - Industry standard for software distribution
- ✅ **Versioning** - Keep multiple versions available
- ✅ **Analytics** - See download counts
- ✅ **Reliable** - GitHub's infrastructure

---

## 🔄 Future Updates:

When you release a new version:

1. Create a new release (e.g., `v0.2.0`)
2. Upload new DMG files with the **same filenames**
3. Done! Your website automatically downloads the latest version

---

## ❓ Troubleshooting:

**"Downloads not working after release?"**
- Make sure filenames are exactly:
  - `DataProbe-apple-silicon.dmg`
  - `DataProbe-intel.dmg`
- Wait a few seconds for GitHub to process the release
- Try the direct URL in your browser first

**"Want to keep files in public folder for testing?"**
- The files are still in `/frontend/public/download/` on your local machine
- They're just not tracked by git (in `.gitignore`)
- You can test locally with `npm run dev`

---

## ✨ You're All Set!

1. Push your code ✅
2. Create GitHub Release ✅
3. Upload DMG files ✅
4. Downloads work! 🎉

No backend needed, no file size limits, completely free! 🚀
