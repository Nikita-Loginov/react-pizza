import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartPizzaType } from "../../types/PizzaTypes";

interface CartType {
  totalPrice: number;
  totalCount: number;
  items : CartPizzaType[];
}

interface RemoveItemPayload {
  item: CartPizzaType;
  delete: number; 
}

const initialState: CartType = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action : PayloadAction<CartPizzaType>) => {
      const cartItem = state.items.find((item) => {
        return (
          action.payload.id === item.id &&
          action.payload.sizeActive === item.sizeActive &&
          action.payload.typeActive === item.typeActive
        );
      });

      if (!cartItem) {
        const newObj = { ...action.payload, count: 1 };
        state.items.push(newObj);
        state.totalCount += 1;
      } else {
        cartItem.count += 1;
        state.totalCount += 1;
      }

      state.totalPrice += action.payload.price;
    },

    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
      const {item} = action.payload

      if (action.payload.delete === 1) {
        const findItem = state.items.find((pizza) => {
          return (
            item.id === pizza.id &&
            item.sizeActive === pizza.sizeActive &&
            item.typeActive === pizza.typeActive
          );
        });

        if (findItem) {
          findItem.count -= 1
        }

        state.totalCount -= 1
        state.totalPrice -= item.price
      } else if (action.payload.delete === 2) {
        const cartItems = state.items.filter((pizza) => {
          if (
            item.id !== pizza.id ||
            (item.id === pizza.id &&
              item.sizeActive !== pizza.sizeActive) ||
            (item.id === pizza.id &&
              item.typeActive !== pizza.typeActive)
          ) {
            return true;
          }
        });

        const priceInner = item.count * item.price;

        state.totalPrice -= priceInner
        state.totalCount -= item.count

        state.items = [...cartItems];
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
