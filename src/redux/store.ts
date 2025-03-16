import { configureStore } from "@reduxjs/toolkit";
import filters from "./slices/filters";
import pagination from "./slices/pagination";
import cart from "./slices/cart";
import pizzas from "./slices/pizzas";
import currency from "./slices/currency";

const store = configureStore({
  reducer: {
    filters,
    pagination,
    cart,
    pizzas,
    currency
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
