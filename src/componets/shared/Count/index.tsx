import { useDispatch } from "react-redux";
import React, { useState } from "react";

import { addItem, removeItem } from "../../../redux/slices/cart";

import "./index.scss";
import { AppDispatch } from "../../../redux/store";

import { CartPizzaType } from "../../../types/PizzaTypes";

interface CountProps {
  item: CartPizzaType;
}

const Count: React.FC<CountProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [count, setCount] = useState(item?.count);

  const deleteItemCart = () => {
    const info = {
      item: { ...item },
      delete: 1, //удалить один элемен (1 - это не кол-во, а просто значение помощник)
    };

    if (count >= 1) {
      dispatch(removeItem(info));
      setCount((prev) => prev - 1);
    }
  };

  const addItemCart = () => {
    dispatch(addItem(item));
    setCount((prev) => (prev += 1));
  };

  return (
    <div className="count">
      <button
        className={`count__btn ${count === 1 ? "disabled" : ""}`}
        aria-label="уменьшить на 1 счетчик"
        onClick={deleteItemCart}
      >
        -
      </button>

      <span className="count__numb">{count}</span>

      <button
        className="count__btn"
        onClick={addItemCart}
        aria-label="прибавить 1 к счетчику"
      >
        +
      </button>
    </div>
  );
};

export default Count;
