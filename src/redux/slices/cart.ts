import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartPizzaType } from "../../types/PizzaTypes";

interface CartType {
  items : CartPizzaType[];
  countIndicator: number
}

interface RemoveItemPayload {
  item: CartPizzaType;
  delete: number; 
}

interface indicatorType {
  mean: string
}


const getPizzasInLC = () : CartPizzaType[] => {
  const pizzas = localStorage.getItem('cart');

  return pizzas ? JSON.parse(pizzas) : []
}

const getCountIndicatorInLC = () => {
  const info = localStorage.getItem('indicator');

  return info ? JSON.parse(info).countIndicator : []
}

const initialState: CartType = {
  items: getPizzasInLC(),
  countIndicator : getCountIndicatorInLC()
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
      } else {
        cartItem.count += 1;
      }
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

        state.items = [...cartItems];
      }
    },

    clearCart: (state) => {
      state.items = [];
    },

    changeCountIndicator : (state, action: PayloadAction<indicatorType>) => {
      if (action.payload.mean === 'plus') {
        state.countIndicator++
      } else {
        state.countIndicator = 0
      }
    }
  },
});

export const { addItem, clearCart, removeItem, changeCountIndicator } = cartSlice.actions;

export default cartSlice.reducer;
