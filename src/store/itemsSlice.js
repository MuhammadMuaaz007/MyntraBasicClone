import { createSlice } from "@reduxjs/toolkit";
import DEFAULT_ITEMS from "../data/items";
const itemsSlice=createSlice({
  name:"items",
  initialState:DEFAULT_ITEMS,
  reducers:{
    add:()=>{
      console.log("items added")
    }
  }
});
export const itemsActions=itemsSlice.actions;
export default itemsSlice;


