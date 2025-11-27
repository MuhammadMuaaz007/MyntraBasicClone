# Debugging Guide - Nothing Showing

## Step-by-Step Debugging:

### 1. Check Terminal Output
When you run `npm run dev`, you should see:
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**IMPORTANT:** Copy the URL (http://localhost:5173) and open it in your browser manually.

### 2. Check Browser Console
1. Open browser (Chrome/Firefox/Edge)
2. Press **F12** to open DevTools
3. Go to **Console** tab
4. Look for **RED errors**
5. Share any errors you see

### 3. Check Network Tab
1. In DevTools, go to **Network** tab
2. Refresh page (F5)
3. Look for failed requests (red items)
4. Check if `main.jsx` loads successfully

### 4. Verify Installation
```bash
cd myntraClone
npm install
npm run dev
```

### 5. Check if React is Loading
Open browser console and type:
```javascript
document.getElementById('root')
```
If it returns `null`, the HTML is wrong.
If it returns an element, React should be rendering.

### 6. Common Issues:

**Issue: Blank white page**
- Check browser console for errors
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Issue: "Cannot find module"**
- Run: `npm install`
- Check if all files exist

**Issue: Port already in use**
- Vite will use next port (5174, 5175, etc.)
- Check terminal for actual URL

**Issue: Source map warnings**
- These are harmless, ignore them
- App should still work

### 7. Quick Test
Add this to see if React works:
1. Open browser console (F12)
2. Type: `document.body.innerHTML = '<h1>Test</h1>'`
3. If you see "Test", browser is working
4. The issue is with React rendering

### 8. Still Not Working?
Share:
1. What you see in terminal when running `npm run dev`
2. What you see in browser (blank? error message?)
3. Any errors from browser console (F12 > Console tab)
4. Screenshot if possible

