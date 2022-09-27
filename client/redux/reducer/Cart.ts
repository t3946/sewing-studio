import {AnyAction} from "redux";

const initialState = {
  list: [],
};

const Cart = (
  state: Record<any, any> = initialState,
  action: AnyAction
): Record<any, any> => {
  switch (action.type) {
    case "SET":
      const newState = {...state};
      const {productId, count} = action.data;

      newState.list = [...newState.list];

      for (const product of newState.list) {
        if (product.productId === productId) {
          product.count = count;
          return newState;
        }
      }

      newState.list.push({
        productId,
        count,
      });

      return newState;

    default:
      return state;
  }
};

export default Cart;
