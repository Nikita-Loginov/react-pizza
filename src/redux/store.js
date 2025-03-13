import { configureStore } from "@reduxjs/toolkit";
import filters from "./slices/filters";
import pagination from "./slices/pagination";
import cart from "./slices/cart";
import pizzas from "./slices/pizzas";

export const store = configureStore({
    reducer: {
        filters,
        pagination,
        cart,
        pizzas
    }
})