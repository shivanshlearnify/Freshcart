import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    deleteFromCart: (state,action) => {
      state.items = state.items.filter((item,index)=>(index!=action.payload))
    },
    emptyCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addToCart, deleteFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
