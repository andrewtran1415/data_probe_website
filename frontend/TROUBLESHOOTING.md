# Troubleshooting Guide

## npm Cache Permission Issues

If you see errors like:
```
npm error EACCES: permission denied
npm error Your cache folder contains root-owned files
```

### Solution 1: Fix npm cache permissions (Recommended)

Run this command in your terminal:
```bash
sudo chown -R $(whoami):$(id -gn) ~/.npm
```

Then try installing again:
```bash
npm install
```

### Solution 2: Use a different cache location

If you can't use sudo, you can configure npm to use a different cache location:

```bash
npm config set cache ~/.npm-cache --global
npm install
```

### Solution 3: Use npm with --force (Temporary workaround)

```bash
npm install --force
```

**Note:** This is not recommended as it may cause other issues, but it can work as a temporary solution.

## After Fixing Permissions

Once permissions are fixed, run:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Then start dev server
npm run dev
```

## Alternative: Use yarn instead of npm

If npm continues to have issues, you can use yarn:

```bash
# Install yarn if you don't have it
npm install -g yarn

# Then use yarn instead
yarn install
yarn dev
```

