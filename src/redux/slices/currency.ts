import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface currencyType {
    coefficient: number;
    icon: string;
}

const getCurrencyInfoLC = () : currencyType => {
  const currencyInfo = localStorage.getItem('currency');

  return currencyInfo ? JSON.parse(currencyInfo) : {coefficient : 1,
    icon : "₽"}
}

const initialState : currencyType = {
    coefficient : getCurrencyInfoLC().coefficient,
    icon : getCurrencyInfoLC().icon,
}

const currencySlice = createSlice({
    name: 'currenty',
    initialState,
    reducers : {
        changeCurrency : (state, action : PayloadAction<currencyType>) => {
            state.coefficient = action.payload.coefficient;
            state.icon = action.payload.icon;
        }
    }
})

export const {changeCurrency} = currencySlice.actions;

export default currencySlice.reducer;