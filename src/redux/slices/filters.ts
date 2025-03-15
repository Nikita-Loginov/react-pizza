import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveSort {
  name : string,
  icon : string,
  detail: string;
  sortProperty : string
}

interface FilterState {
  activeIndexFilter: number;
  activeSort: ActiveSort;
}

const initialState : FilterState = {
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
    setActiveIndexFilter: (state, action : PayloadAction<number>) => {
      state.activeIndexFilter = action.payload;
    },
    
    setActiveSort: (state, action : PayloadAction<ActiveSort>) => {
        state.activeSort = action.payload
    }
  },
});

export const { setActiveIndexFilter, setActiveSort } = filtersSlice.actions;

export default filtersSlice.reducer;
