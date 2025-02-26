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

  // const changeActiveIndex = (activeIndex) => {
  //   setActiveIndex(() => activeIndex)
  // }

  return (
    <div className="filter">
      {items.map((itemText, index) => (
        <button
          key={itemText}
          onClick={() => value.filterInfo.setActiveIndexFilter(index)}
          className={`filter__btn ${index === activeIndex ? "active" : ""}`}
        >
          {itemText}
        </button>
      ))}
    </div>
  );
}
