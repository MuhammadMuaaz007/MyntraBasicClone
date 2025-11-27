import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const itemId = action.payload;
      if (!state.includes(itemId)) {
        state.push(itemId);
      }
    },
    removeFromWishlist: (state, action) => {
      return state.filter(itemId => itemId !== action.payload);
    },
  }
});

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;

