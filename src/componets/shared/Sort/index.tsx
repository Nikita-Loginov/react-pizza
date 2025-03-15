import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setActiveSort } from "../../../redux/slices/filters";

import "./index.scss";

const items = [
  {
    name: "популярности",
    icon: "/icons/arrow-up.svg",
    detail: "asc",
    sortProperty: "rating",
  },
  {
    name: "популярности",
    icon: "/icons/arrow-down.svg",
    detail: "desc",
    sortProperty: "rating",
  },
  {
    name: "по цене",
    icon: "/icons/arrow-up.svg",
    detail: "asc",
    sortProperty: "price",
  },
  {
    name: "по цене",
    icon: "/icons/arrow-down.svg",
    detail: "desc",
    sortProperty: "price",
  },
];

export default function Sort() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const changeActiveIndex = (indexActive: number) => {
    setActiveIndex(() => indexActive);

    dispatch(setActiveSort(items[indexActive]));
    setIsOpen(() => false);
  };

  useEffect(() => {
    function closePopupSort(e : MouseEvent) {
      const target = e.target as HTMLElement;

      if (target && !target.closest(".sort")) {
        setIsOpen(() => false);
      }

    }
    document.addEventListener("click", closePopupSort);

    return () => {
      document.removeEventListener("click", closePopupSort);
    };
  }, []);

  return (
    <div className={`sort ${isOpen ? "open" : ""}`}>
      <div className="sort__active" onClick={toggleOpen}>
        <div className="sort__active-content">
          <img
            src="/icons/arrow-small.svg"
            alt="иконка стрелки"
            className="sort__active-icon"
          />
          <p className="sort__active-text">Сортировка по:</p>
        </div>

        <div className="sort__active-item">
          <p className="sort__active-item-text">{items[activeIndex].name}</p>

          {items[activeIndex].icon && (
            <img
              src={items[activeIndex].icon}
              alt="иконка стрелки"
              className="sort__active-item-icon"
            />
          )}
        </div>
      </div>

      <ul className="sort__list">
        {items.map((item, index) => (
          <li
            className={`sort__link ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => changeActiveIndex(index)}
          >
            <span className="sort__link-text">{item.name}</span>

            <img
              src={item.icon}
              alt="иконка стрелки"
              className="sort__link-icon"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
