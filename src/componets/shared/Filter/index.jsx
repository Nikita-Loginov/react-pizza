import { useState } from "react";

import "./index.scss"

export default function Filter() {
  const items = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveIndex = (activeIndex) => {
    setActiveIndex(() => activeIndex)
  }

  return (
    <div className="filter">
      {items.map((itemText, index) => (
        <button key={itemText} onClick={() => changeActiveIndex(index)} className={`filter__btn ${index === activeIndex ? 'active' : ''}`}>{itemText}</button>
      ))}
    </div>
  );
}
