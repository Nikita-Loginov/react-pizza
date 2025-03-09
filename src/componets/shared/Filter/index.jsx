import { useSelector, useDispatch } from "react-redux";

import { setActiveIndexFilter } from "../../../redux/slices/filters";
import { setActivePage } from "../../../redux/slices/pagination";

import "./index.scss";

const items = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export default function Filter() {
  const activeIndex = useSelector((state) => state.filters.activeIndexFilter);
  const dispatch = useDispatch();

  const changeActiveIndex = (activeIndex) => {
    dispatch(setActiveIndexFilter(activeIndex));
    dispatch(setActivePage(0))
  };

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
