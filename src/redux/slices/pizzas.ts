import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaType } from "../../types/PizzaTypes";

interface PizzasState {
  items: PizzaType[];
  loading: 'loading' | 'ready' | 'error';
}

const initialState: PizzasState = {
  items: [],
  loading: "loading",
};


export const fetchPizzas = createAsyncThunk<PizzaType[], { activeIndexFilter: number | null; activeSort: { sortProperty: string; detail: string } }>(
  "pizzas/fetchPizzas",
  async ({ activeIndexFilter, activeSort }) => {
    const response = await axios.get<PizzaType[]>(
      `https://6741cf43e4647499008ed9f7.mockapi.io/items?category=${activeIndexFilter || ""}&sortBy=${activeSort?.sortProperty}&order=${activeSort.detail}`
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
        state.items = []
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload; 
        state.loading = "ready"; 
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.items = []; 
        state.loading = "error"; 
      });
  },
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;