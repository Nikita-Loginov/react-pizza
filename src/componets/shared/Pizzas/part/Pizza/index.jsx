import { useState } from "react";

import "./index.scss";

export default function Pizza({ item }) {
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

  const [activeTypeIndex, setActiveTypeIndex] = useState(item.types[0]);
  const [activeSizeIndex, setActiveSizeIndex] = useState(item.sizes[0]);

  const changeActiveIndex = (name, mean) => {
    if (name === "type") {
      setActiveTypeIndex(() => mean);
    } else if (name === "size") {
      setActiveSizeIndex(() => mean);
    }
  };

  return (
    <div className="pizza">
      <img
        src={item.imageUrl}
        alt={`пицца ${item.title.toLowerCase()}`}
        loading="lazy"
        className="pizza__img"
        width={280}
        height={280}
      />

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
                onClick={() => changeActiveIndex('size', size.massa)}
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

          <button className="cart-add">
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

            <span className="cart-add__count">2</span>
          </button>
        </div>
      </div>
    </div>
  );
}
