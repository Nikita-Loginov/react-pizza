import React, { useState } from "react";

import { addItem } from "../../../../../redux/slices/cart";
import { useSelector, useDispatch } from "react-redux";

import { PizzaType } from "../../../../../types/PizzaTypes";

import { Link } from "react-router";

import { RootState } from "../../../../../redux/store";

import "./index.scss";

const typesNames = ["тонкое", "традиционное"];
const sizesNames = [
  {
    massa: 26,
    currency: "см",
  },
  {
    massa: 30,
    currency: "см",
  },
  {
    massa: 40,
    currency: "см",
  },
];

interface PizzaProps {
  item: PizzaType;
}

const Pizza: React.FC<PizzaProps> = ({ item }) => {
  const count = useSelector((state: RootState) => {
    let countInner = 0;

    state.cart.items.map((pizza) => {
      if (pizza.id === item.id && pizza.count) {
        countInner += pizza.count;
      }
    });

    return countInner;
  });

  const dispatch = useDispatch();

  const [activeTypeIndex, setActiveTypeIndex] = useState(item.types[0]);
  const [activeSizeIndex, setActiveSizeIndex] = useState(item.sizes[0]);

  const changeActiveIndex = (name : string, mean: number) => {
    if (name === "type") {
      setActiveTypeIndex(() => mean);
    } else if (name === "size") {
      setActiveSizeIndex(() => mean);
    }
  };

  const addPizzaInCart = () => {
    const newObj = {
      ...item,
      sizeActive: activeSizeIndex,
      typeActive: activeTypeIndex,
      count : 0,
    };

    dispatch(addItem(newObj));
  };

  return (
    <div className="pizza">
      <Link to={`/pizza/${item.id}`} className="pizza__img-box">
        <img
          src={item.imageUrl}
          alt={`пицца ${item.title.toLowerCase()}`}
          loading="lazy"
          className="pizza__img"
          width={280}
          height={280}
        />

        <div className="pizza__rating">
          <span className="pizza__rating-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                fill="#FFD43B"
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
          </span>

          <div className="pizza__rating-numb">({item.rating})</div>
        </div>
      </Link>

      <div className="pizza__content">
        <h2 className="pizza__name">{item.title}</h2>

        <div className="pizza__sort">
          <ul className="pizza__type">
            {typesNames.map((itemText, index) => (
              <li
                key={index}
                onClick={() => changeActiveIndex("type", index)}
                className={`pizza__sort-item ${
                  activeTypeIndex === index ? "active" : ""
                } ${!item.types.includes(index) ? "disabled" : ""}`}
              >
                {itemText}
              </li>
            ))}
          </ul>

          <ul className="pizza__massa">
            {sizesNames.map((size, index) => (
              <li
                key={index}
                onClick={() => changeActiveIndex("size", size.massa)}
                className={`pizza__sort-item ${
                  Number(size.massa) === activeSizeIndex ? "active" : ""
                } ${!item.sizes.includes(size.massa) ? "disabled" : ""}`}
              >
                {size.massa} {size.currency}
              </li>
            ))}
          </ul>
        </div>

        <div className="pizza__details">
          <p className="pizza__price">
            от {item.price} {item.currency}
          </p>

          <button
            className={`cart-add ${count ? "active" : ""}`}
            onClick={addPizzaInCart}
          >
            <span className="cart-add__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="12.000000"
                height="12.000000"
                viewBox="0 0 12 12"
                fill="none"
              >
                <defs />
                <path
                  id="Vector"
                  d="M10.8 4.79L7.2 4.79L7.2 1.2C7.2 0.53 6.66 0 6 0C5.33 0 4.79 0.53 4.79 1.2L4.79 4.79L1.2 4.79C0.53 4.79 0 5.33 0 6C0 6.66 0.53 7.2 1.2 7.2L4.79 7.2L4.79 10.8C4.79 11.46 5.33 12 6 12C6.66 12 7.2 11.46 7.2 10.8L7.2 7.2L10.8 7.2C11.46 7.2 12 6.66 12 6C12 5.33 11.46 4.79 10.8 4.79Z"
                  fill="#EB5A1E"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
            </span>

            <span className="cart-add__text">Добавить</span>

            <span className="cart-add__count">{count}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
