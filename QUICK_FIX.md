# Quick Fix - Nothing Showing

## Immediate Steps:

1. **Stop the server** (if running): Press `Ctrl+C` in terminal

2. **Clear cache and restart:**
   ```bash
   cd myntraClone
   rm -rf node_modules/.vite
   npm run dev
   ```

3. **Open the URL manually:**
   - Look at terminal output
   - Copy the URL (e.g., `http://localhost:5173`)
   - Paste in browser address bar
   - Press Enter

4. **Check Browser Console:**
   - Press F12
   - Go to Console tab
   - Look for errors

5. **If still blank, try:**
   ```bash
   npm install
   npm run dev
   ```

## What Should Happen:
- Terminal shows: "ready in xxx ms" with a URL
- Browser opens (or you open it manually)
- You see the Myntra header with navigation
- Products display on home page

## If You See:
- **Blank white page**: Check browser console (F12)
- **Error message**: Share the error
- **Loading forever**: Check network tab in DevTools

