import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countItems: 0,
    activePage: 0
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCountItems: (state, action) => {
            state.countItems = action.payload
        },

        setActivePage: (state, action) => {
            state.activePage = action.payload
        },
    }
})

export const {setCountItems, setActivePage} = paginationSlice.actions;

export default paginationSlice.reducer;