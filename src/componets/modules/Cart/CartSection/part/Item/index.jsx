import Count from "../../../../../shared/Count";

import './index.scss'

export default function Item() {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <img
          src="https://media.dodostatic.net/image/r:292x292/11ee7d611adf5aad898b8b651186e023.jpg"
          alt="фотография пиццы"
          className="cart-item__img"
        />

        <div className="cart-itembox">
          <h2 className="cart-item__name">Сырный цыпленок</h2>

          <p className="cart-item__descr">тонкое тесто, 26 см.</p>
        </div>
      </div>

      <div className="cart-item__details">
        <Count />

        <div className="cart-item__price">
          <p className="cart-item__peice-num">770</p>

          <p className="cart-item__price-currenty">₽</p>
        </div>

        <button className="cart-item__delete">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="8.116211"
            height="8.116228"
            viewBox="0 0 8.11621 8.11623"
            fill="none"
          >
            <defs />
            <path
              id="Vector"
              d="M7.8 6.3L5.55 4.05L7.8 1.8C8.21 1.39 8.21 0.72 7.8 0.31C7.39 -0.11 6.72 -0.11 6.3 0.31L4.05 2.55L1.8 0.31C1.39 -0.11 0.72 -0.11 0.31 0.31C-0.11 0.72 -0.11 1.39 0.31 1.8L2.55 4.05L0.31 6.3C-0.11 6.72 -0.11 7.39 0.31 7.8C0.72 8.21 1.39 8.21 1.8 7.8L4.05 5.55L6.3 7.8C6.72 8.21 7.39 8.21 7.8 7.8C8.21 7.39 8.21 6.72 7.8 6.3Z"
              fill="#D0D0D0"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
