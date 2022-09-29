import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  email: "",
  orderNumber: "",
};

function getOrderNumber () {
  let orderNumber = "";

  for (let i = 0; i < 5; i ++) {
    orderNumber += Math.round(Math.random() * 9).toString();
  }
  return orderNumber;
}

const orderSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setContacts(state: any, action: any) {
      const { phone, email } = action.payload;

      state.phone = phone;
      state.email = email;
      state.orderNumber = getOrderNumber();
    },
  },
});

export const { setContacts } = orderSlice.actions;

export default orderSlice.reducer;
