import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

function updateCookie(state: any) {
  const cookie = require("js-cookie");
  cookie.set("cart", JSON.stringify(state));
}

const cartSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    add(state: any, action: any) {
      const { productId, count } = action.payload;

      for (const product of state.list) {
        if (product.productId === productId) {
          product.count += count;
          updateCookie(state);
          return;
        }
      }

      state.list.push({
        productId,
        count,
      });

      updateCookie(state);
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
