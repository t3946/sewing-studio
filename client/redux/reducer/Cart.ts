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

    remove(state: any, action: any) {
      const { productId } = action.payload;
      const newList = [];

      for (const product of state.list) {
        if (product.productId !== productId) {
          newList.push(product);
        }
      }

      state.list = newList;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
