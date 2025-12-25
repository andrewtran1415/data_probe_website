# Download Files Setup

This folder contains the downloadable installer files for DataProbe.

## Required Files

Place your DMG files in this directory with these exact filenames:

### macOS Files:
- `DataProbe-apple-silicon.dmg` - For Apple Silicon Macs (M1, M2, M3, M4)
- `DataProbe-intel.dmg` - For Intel-based Macs

### Future Platform Files:
- `DataProbe-setup.exe` - For Windows (when available)
- `DataProbe-linux.AppImage` - For Linux (when available)

## How to Add Files

1. **Copy your DMG files to this folder:**
   ```bash
   cp /path/to/your/DataProbe-apple-silicon.dmg /Users/quangtran/Documents/projects/data_probe_website/frontend/public/download/
   cp /path/to/your/DataProbe-intel.dmg /Users/quangtran/Documents/projects/data_probe_website/frontend/public/download/
   ```

2. **Commit and push to GitHub:**
   ```bash
   git add frontend/public/download/
   git commit -m "Add DMG installers for download"
   git push
   ```

3. **Vercel will automatically deploy** - Your files will be available at:
   - `https://yourdomain.com/download/DataProbe-apple-silicon.dmg`
   - `https://yourdomain.com/download/DataProbe-intel.dmg`

## Important Notes

⚠️ **File Size Considerations:**
- Keep DMG files under 100MB if possible
- Large files will slow down git operations
- Consider using GitHub Releases or CDN for files >100MB

✅ **Current Setup:**
- Files are served directly from Vercel
- No backend needed
- Automatic CDN distribution
- Fast downloads globally

## Troubleshooting

**Downloads not working?**
1. Check that files exist in this folder
2. Verify filenames match exactly (case-sensitive)
3. Make sure files are committed to git
4. Wait for Vercel deployment to complete
5. Check browser console for errors
