import { CartPizzaType } from "../../types/PizzaTypes";

export const calculateTotalPrice = (items: CartPizzaType[]) => {
  const totalPrice = items.reduce((acc, current) => {
    return acc + current.price * current.count;
  }, 0);

  return totalPrice
};

export const calculateTotalCount = (items: CartPizzaType[]) => {
    const totalCount = items.reduce((acc, current) => {
      return acc + current.count;
    }, 0);
  
    return totalCount
  };
  
