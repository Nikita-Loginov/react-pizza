import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";

import { changeCurrency } from "../../../redux/slices/currency";

import "./index.scss";

const Currency : React.FC = () => {
  const { icon } = useSelector((state: RootState) => state.currency);

  const dispatch = useDispatch();


  const changeCurrencyIcon = () => {
    if (icon === "₽") {
      dispatch(changeCurrency({coefficient: 85, icon : '$'}))
    } else if (icon === "$") {
      dispatch(changeCurrency({coefficient: 1, icon : '₽'}))
    }
  };


  return (
    <button
      className="currency"
      aria-label="сменить валюту"
      title="Сменить валюту"
      onClick={changeCurrencyIcon}
    >
      {/* <p className="currency__text">текущая валюта</p> */}

      <span className="currency__icon">{icon}</span>
    </button>
  );
}

export default Currency;
