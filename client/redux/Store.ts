import "regenerator-runtime/runtime";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Saga from "@redux/saga/Saga";
import Catalog from "@redux/reducer/Catalog";
import Categories from "@redux/reducer/Categories";
import History from "@redux/reducer/History";
import Reviews from "@redux/reducer/Reviews";
import Popup from "@redux/reducer/Popup";
import User from "@redux/reducer/User";
import Menu from "@redux/reducer/Menu";
import Stock from "@redux/reducer/Stock";
import Cart from "@redux/reducer/Cart";
import Order from "@redux/reducer/Order";
import { configureStore } from "@reduxjs/toolkit";

const getStore = (function () {
  let store: any;

  return (preloadedState = {}) => {
    if (!store) {
      const sagaMiddleware = createSagaMiddleware();

      store = configureStore({
        reducer: {
          catalog: Catalog,
          categories: Categories,
          history: History,
          reviews: Reviews,
          popup: Popup,
          user: User,
          stock: Stock,
          menu: Menu,
          accountMenu: Menu,
          cart: Cart,
          order: Order,
        },
        preloadedState,
        enhancers: [applyMiddleware(sagaMiddleware)],
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({ serializableCheck: false }),
      });

      sagaMiddleware.run(Saga);
    }

    return store;
  };
})();

export default getStore;
