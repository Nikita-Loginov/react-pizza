import './index.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a
            href="#"
            className="header__logo"
            aria-label="перейти на главную"
            title="Главная"
          >
            <img
              src="/images/logo/index.svg"
              alt="логотип"
              className="header__logo-img"
              width={38}
              height={38}
            />

            <div className="header__logo-content">
              <p className="header__logo-title">REACT PIZZA</p>

              <span className="header__logo-text">
                самая вкусная пицца во вселенной
              </span>
            </div>
          </a>

          <a
            href="#"
            className="header__details"
            aria-label="перейти в корзину"
            title="Корзина"
          >
            <div className="header__details-item header__details-price">
              <span className="header__details-price-summ">520</span>

              <span className="header__details-price-currenty">₽</span>
            </div>

            <div className="header__details-item header__details-count">
              <span className="header__details-count-icon">
                <img src="/icons/cart.svg" alt="иконка корзины" />
              </span>

              <span className="header__details-count-number">3</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
