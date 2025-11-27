# Myntra Clone - E-commerce Application

A fully functional Myntra clone built with React, Redux, and React Router. Features include product browsing, shopping bag, wishlist, search, and user profile management.

## 🚀 Quick Start

### 1. Install Dependencies

Make sure you're in the `myntraClone` directory, then run:

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or another port if 5173 is busy).

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## ✨ Features

### ✅ Completed Features

- **Home Page**: Browse all products with hero banner and category quick links
- **Product Detail Page**: View full product information, add to bag/wishlist
- **Shopping Bag**: Add/remove items, view summary with price calculations
- **Wishlist**: Save favorite items, move to bag, remove items
- **Search**: Search products by name or brand
- **Category Pages**: Filter products by category (Men, Women, Kids, Beauty, etc.)
- **Profile Page**: View orders, wishlist, and account settings
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Redux State Management**: Centralized state for bag, wishlist, and items

## 🧪 Testing the Application

### Test These Features:

1. **Home Page**
   - View all products
   - Click on category quick links
   - Click on any product to view details

2. **Product Interactions**
   - Click heart icon to add/remove from wishlist
   - Click "Add to Bag" button
   - Click product image/name to view details

3. **Shopping Bag**
   - Add items from home page
   - View bag items and summary
   - Remove items from bag
   - Check price calculations

4. **Wishlist**
   - Add items to wishlist
   - View wishlist page
   - Move items from wishlist to bag
   - Remove items from wishlist

5. **Search**
   - Type in search bar (e.g., "Nike", "T-shirt")
   - View search results
   - Click on search results

6. **Categories**
   - Click on category links in header
   - Browse filtered products

7. **Profile**
   - View profile information
   - Check stats (bag items, wishlist, orders)
   - Edit profile
   - View orders and wishlist tabs

8. **Responsive Design**
   - Resize browser window
   - Test on mobile device or use browser dev tools
   - Check navigation on mobile

## 📁 Project Structure

```
myntraClone/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HomeItem.jsx
│   │   ├── BagItem.jsx
│   │   ├── BagSummary.jsx
│   │   ├── Wishlist.jsx
│   │   └── Profile.jsx
│   ├── Routes/            # Page components
│   │   ├── App.jsx
│   │   ├── Home.jsx
│   │   ├── Bag.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Search.jsx
│   │   └── Category.jsx
│   ├── store/             # Redux store
│   │   ├── index.js
│   │   ├── BagSlice.js
│   │   ├── wishlistSlice.js
│   │   └── itemsSlice.js
│   ├── data/              # Static data
│   │   └── items.jsx
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── public/
│   └── images/            # Product images
└── package.json
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **Redux Toolkit** - State management
- **React Router** - Routing
- **React Icons** - Icons
- **Vite** - Build tool
- **CSS3** - Styling with responsive design

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎯 Next Steps (Optional Enhancements)

If you want to extend the project further:

1. **Backend Integration**
   - Connect to a real API
   - User authentication
   - Order processing

2. **Additional Features**
   - Product reviews and ratings
   - Image gallery on product page
   - Size/color selection
   - Coupon codes
   - Payment integration

3. **Performance**
   - Image lazy loading
   - Code splitting
   - Service workers for PWA

4. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Images Not Loading
Make sure images are in `public/images/` folder and paths in `items.jsx` are correct.

### Dependencies Issues
Delete `node_modules` and `package-lock.json`, then run `npm install` again.

## 📝 Notes

- All product data is currently static (in `src/data/items.jsx`)
- State persists only during the session (refresh clears bag/wishlist)
- For production, you'd want to add backend API integration

---

**Happy Coding! 🎉**
