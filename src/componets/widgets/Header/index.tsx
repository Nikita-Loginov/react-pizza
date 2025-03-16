import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Currency from "../../shared/Сurrency";

import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";

import { calculateTotalPrice, calculateTotalCount } from "../../../utils/functions/cart";

import './index.scss';

export default function Header() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const {items} = useSelector((state: RootState) => state.cart);
  const {icon,coefficient} = useSelector((state: RootState) => state.currency)


  useEffect(() => {
    if (localStorage.getItem('cart')) {
      localStorage.setItem('cart',JSON.stringify(items))
    } else {
      localStorage.setItem('cart', JSON.stringify([]))
    }

    if (localStorage.getItem('currency')) {
      localStorage.setItem('currency',JSON.stringify({icon, coefficient}))
    } else {
      localStorage.setItem('currency', JSON.stringify({}))
    }

    const priceItog =  calculateTotalPrice(items);
    const countItog =  calculateTotalCount(items);

    setTotalPrice(() => priceItog)
    setTotalCount(() => countItog)
    
  }, [items, icon])
  
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link
            to='/'
            className="header__logo"
            aria-label="перейти на главную"
            title="Главная"
          >
            <img
              src="/images/logo/index.svg"
              alt="логотип"
              className="header__logo-img"
              width={38}
              height={38}
            />

            <div className="header__logo-content">
              <p className="header__logo-title">REACT PIZZA</p>

              <span className="header__logo-text">
                самая вкусная пицца во вселенной
              </span>
            </div>
          </Link>

          <Currency />

          <Link
            to="/cart"
            className="header__details"
            aria-label="перейти в корзину"
            title="Корзина"
          >
            <div className="header__details-item header__details-price">
              <span className="header__details-price-summ">{(totalPrice / coefficient).toFixed(0)}</span>

              <span className="header__details-price-currenty">{icon}</span>
            </div>

            <div className="header__details-item header__details-count">
              <span className="header__details-count-icon">
                <img src="/icons/cart.svg" alt="иконка корзины" />
              </span>

              <span className="header__details-count-number">{totalCount}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
