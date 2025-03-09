import { Link } from "react-router";

import './index.scss';

export default function CartEmpty() {
  return (
    <section className="cart-empty">
      <div className="container">
        <div className="cart-empty__inner">
          <header className="cart-empty__head">
            <h2 className="cart-empty__title">Корзина пустая 🙊</h2>

            <div className="cart-empty__textbox">
              <p className="cart-empty__text">
                Вероятней всего, вы не заказывали ещё пиццу.
              </p>

              <p className="cart-empty__text">
                Для того, чтобы заказать пиццу, перейди на главную страницу.
              </p>
            </div>
          </header>

          <img
            src="/images/cart/empty.svg"
            alt="человек с корзиной"
            className="cart-empty__img"
          />

          <Link to="/" className="link">
            Вернуться назад
          </Link>
        </div>
      </div>
    </section>
  );
}
