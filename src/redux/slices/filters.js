import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndexFilter: 0,
  activeSort: {
    name: "популярности",
    icon: "/icons/arrow-up.svg",
    detail: "desc",
    sortProperty: "rating",
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveIndexFilter: (state, action) => {
      state.activeIndexFilter = action.payload;
    },
    
    setActiveSort: (state, action) => {
        state.activeSort = action.payload
    }
  },
});

export const { setActiveIndexFilter, setActiveSort } = filtersSlice.actions;

export default filtersSlice.reducer;
