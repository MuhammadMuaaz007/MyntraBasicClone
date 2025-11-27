import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import bagSlice from "./BagSlice";
import wishlistSlice from "./wishlistSlice";


const myntraStore=configureStore({
  reducer:{
  items:itemsSlice.reducer,
      bag: bagSlice.reducer,
      wishlist: wishlistSlice.reducer,
  }

})
export default myntraStore;