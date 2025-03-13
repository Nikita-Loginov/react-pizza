import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  loading: "loading",
};

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async ({ activeIndexFilter, activeSort }) => {
    const response = await axios.get(
      `https://6741cf43e4647499008ed9f7.mockapi.io/items?category=${
        activeIndexFilter ? activeIndexFilter : ""
      }&sortBy=${activeSort?.sortProperty}&order=${activeSort.detail}`
    );

    return response.data;
  }
);

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.loading = "loading";
        // state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        // state.items = action.payload;
        state.loading = "ready";
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.items = [];
        state.loading = "error";
      });
  },
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
