import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface PaginationType {
    countItems: number;
    activePage: number;
}

const initialState : PaginationType = {
    countItems: 0,
    activePage: 0
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCountItems: (state, action: PayloadAction<number>) => {
            state.countItems = action.payload
        },

        setActivePage: (state, action: PayloadAction<number>) => {
            state.activePage = action.payload
        },
    }
})

export const {setCountItems, setActivePage} = paginationSlice.actions;

export default paginationSlice.reducer;