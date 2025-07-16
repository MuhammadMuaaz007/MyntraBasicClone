import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import bagSlice from "./BagSlice";


const myntraStore=configureStore({
  reducer:{
  items:itemsSlice.reducer,
      bag: bagSlice.reducer,
  }

})
export default myntraStore;