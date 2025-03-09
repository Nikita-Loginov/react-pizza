import { configureStore } from "@reduxjs/toolkit";
import filters from "./slices/filters";
import pagination from "./slices/pagination";

export const store = configureStore({
    reducer: {
        filters,
        pagination
    }
})