import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setActiveIndexFilter } from "../../../redux/slices/filters";
import { setActivePage } from "../../../redux/slices/pagination";

import "./index.scss";
import { RootState } from "../../../redux/store";

const items = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export default function Filter() {
  const activeIndex = useSelector((state: RootState) => state.filters.activeIndexFilter);
  const dispatch = useDispatch();

  const changeActiveIndex = (activeIndex: number) => {
    dispatch(setActiveIndexFilter(activeIndex));
    dispatch(setActivePage(0))
  };

  return (
    <div className="filter">
      {items.map((itemText, index) => (
        <button
          key={itemText}
          title={itemText}
          aria-label={`выбрать категорию ${itemText}`}
          onClick={() => changeActiveIndex(index)}
          className={`filter__btn ${index === activeIndex ? "active" : ""}`}
        >
          {itemText}
        </button>
      ))}
    </div>
  );
}
