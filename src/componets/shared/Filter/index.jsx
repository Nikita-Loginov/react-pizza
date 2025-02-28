import { useContext } from "react";
import { MyContext } from "../../../App";

import "./index.scss";

export default function Filter() {
  const value = useContext(MyContext);

  const items = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const activeIndex = value.filterInfo.activeIndexFilter;

  const changeActiveIndex = (activeIndex) => {
    value.paginationInfo.setActivePage(0)
    console.log(activeIndex)
    value.filterInfo.setActiveIndexFilter(activeIndex)
  }

  return (
    <div className="filter">
      {items.map((itemText, index) => (
        <button
          key={itemText}
          onClick={() => changeActiveIndex(index)}
          className={`filter__btn ${index === activeIndex ? "active" : ""}`}
        >
          {itemText}
        </button>
      ))}
    </div>
  );
}
