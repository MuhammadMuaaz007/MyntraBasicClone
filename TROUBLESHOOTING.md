# Troubleshooting Guide

## If nothing shows when running `npm run dev`:

### Step 1: Check if the server is running
1. Open terminal and run: `cd myntraClone && npm run dev`
2. You should see output like:
   ```
   VITE v7.x.x  ready in xxx ms
   ➜  Local:   http://localhost:5173/
   ```
3. **Open the URL shown** (usually http://localhost:5173) in your browser

### Step 2: Check Browser Console
1. Open your browser (Chrome/Firefox/Edge)
2. Press `F12` or `Right-click > Inspect`
3. Go to the **Console** tab
4. Look for any red error messages
5. Share any errors you see

### Step 3: Check Network Tab
1. In browser DevTools, go to **Network** tab
2. Refresh the page (F5)
3. Look for any failed requests (red items)

### Step 4: Verify Installation
```bash
cd myntraClone
npm install
npm run dev
```

### Step 5: Clear Cache
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Common Issues:

1. **Port already in use**: Vite will automatically use next available port
2. **Missing dependencies**: Run `npm install` again
3. **Browser cache**: Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. **JavaScript errors**: Check browser console for errors

### Quick Test:
1. Make sure you're in the `myntraClone` directory
2. Run: `npm run dev`
3. Wait for the server to start
4. **Click on the localhost URL** that appears in terminal
5. The browser should open automatically, but if not, copy the URL manually

### Still not working?
- Check if you have Node.js installed: `node --version` (should be v16+)
- Check if npm is installed: `npm --version`
- Make sure you're in the correct directory: `cd myntraClone`

