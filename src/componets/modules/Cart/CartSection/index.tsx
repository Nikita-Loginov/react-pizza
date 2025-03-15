import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState, memo } from "react";

import { Link } from "react-router";

import Item from "./part/Item";
// import Button from "../../../controls/Button";
import CartEmpty from "./part/Empty";

import { clearCart } from "../../../../redux/slices/cart";

import "./index.scss";
import { RootState } from "../../../../redux/store";

import { CartPizzaType } from "../../../../types/PizzaTypes";
import {
  calculateTotalCount,
  calculateTotalPrice,
} from "../../../../utils/functions/cart";

interface ItemEntry {
  items: CartPizzaType[];
}

type ItemsBoxType = Record<string, ItemEntry>;

const CartSection = memo(() => {
  const [itemsBox, setItemsBox] = useState<ItemsBoxType>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const newItemsBox = {};

    items.forEach((item) => {
      if (newItemsBox[item.title]) {
        newItemsBox[item.title].items.push(item);
      } else {
        newItemsBox[item.title] = { items: [item] };
      }
    });

    setItemsBox(newItemsBox);
    const priceItog = calculateTotalPrice(items);
    const countItog = calculateTotalCount(items);

    setTotalPrice(() => priceItog);
    setTotalCount(() => countItog);
  }, [items]);

  const clearAllItems = () => {
    const isDelete = confirm("Вы точно хотите очистить всю корзину");

    if (isDelete) {
      setItemsBox({});
      dispatch(clearCart());
    }
  };

  return (
    <>
      {Object.entries(itemsBox).length ? (
        <section className="cart">
          <div className="container">
            <div className="cart__inner">
              <header className="cart__head">
                <h1 className="cart__head-title">
                  <span className="cart__head-title-icon">
                    <img src="/icons/basket.svg" alt="иконка корзины" />
                  </span>

                  <span>Корзина</span>
                </h1>

                <button className="cart__head-remote" onClick={clearAllItems}>
                  <span className="cart__head-remote-icon">
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="20.000000"
                      height="20.000000"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <defs>
                        <clipPath id="clip8_426">
                          <rect
                            rx="0.000000"
                            width="19.000000"
                            height="19.000000"
                            transform="translate(0.500000 0.500000)"
                            fill="white"
                            fillOpacity="0"
                          />
                        </clipPath>
                      </defs>
                      <rect
                        rx="0.000000"
                        width="19.000000"
                        height="19.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="#FFFFFF"
                        fillOpacity="0"
                      />
                      <g clipPath="url(#clip8_426)">
                        <path
                          d="M2.5 5L4.16 5L17.5 5"
                          stroke="#B6B6B6"
                          strokeOpacity="1.000000"
                          strokeWidth="1.200000"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                        <path
                          d="M15.83 16.66C15.83 17.1 15.65 17.53 15.34 17.84C15.03 18.15 14.6 18.33 14.16 18.33L5.83 18.33C5.39 18.33 4.96 18.15 4.65 17.84C4.34 17.53 4.16 17.1 4.16 16.66L4.16 4.99L15.83 4.99L15.83 16.66ZM6.66 4.99L6.66 3.33C6.66 2.89 6.84 2.46 7.15 2.15C7.46 1.84 7.89 1.66 8.33 1.66L11.66 1.66C12.1 1.66 12.53 1.84 12.84 2.15C13.15 2.46 13.33 2.89 13.33 3.33L13.33 4.99"
                          stroke="#B6B6B6"
                          strokeOpacity="1.000000"
                          strokeWidth="1.200000"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8.33 9.16L8.33 14.16"
                          stroke="#B6B6B6"
                          strokeOpacity="1.000000"
                          strokeWidth="1.200000"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11.66 9.16L11.66 14.16"
                          stroke="#B6B6B6"
                          strokeOpacity="1.000000"
                          strokeWidth="1.200000"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                  </span>

                  <span>Очистить корзину</span>
                </button>
              </header>

              <div className="cart__items-boxs">
                {Object.entries(itemsBox).map((item, index) => (
                  <div className="cart__items-box" key={index}>
                    <h2 className="cart__items-head">{item[0]}</h2>

                    <div className="cart__items">
                      {item[1]?.items.map((item) => (
                        <Item
                          key={
                            item.id +
                            "_" +
                            item?.sizeActive +
                            "_" +
                            item?.typeActive
                          }
                          item={{ ...item }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <footer className="cart__footer">
                <div className="cart__itog">
                  <div className="cart__itog-length">
                    <span>Всего пицц: </span>

                    <span className="cart__itog-length-numb">
                      {totalCount} шт.
                    </span>
                  </div>

                  <div className="cart__itog-price">
                    <span>Сумма заказа: </span>

                    <div className="cart__itog-price-summ">
                      <span>{totalPrice}</span>

                      <span>₽</span>
                    </div>
                  </div>
                </div>

                <div className="cart___footer-actions">
                  <Link
                    to="/"
                    aria-label="вернуться назад"
                    className="cart___footer-edit"
                  >
                    <span>
                      <svg
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="7.502930"
                        height="13.506165"
                        viewBox="0 0 7.50293 13.5062"
                        fill="none"
                      >
                        <defs />
                        <path
                          d="M6.74 12.75L0.74 6.68L6.61 0.75"
                          stroke="#D3D3D3"
                          strokeOpacity="1.000000"
                          strokeWidth="1.500000"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>

                    <span>Вернуться назад</span>
                  </Link>

                  {/* <Button
                    text="Оплатить сейчас"
                    backgroundColor="rgb(254, 95, 30)"
                    type="button"
                  /> */}
                </div>
              </footer>
            </div>
          </div>
        </section>
      ) : (
        <CartEmpty />
      )}
    </>
  );
});

export default CartSection;
