import { Link } from "react-router";

import "./index.scss";

export default function Pizza({pizza}) {

  return (
    <div className="pizzaInfo">
      <Link to={`/pizza/${pizza.id}`}>
        <img
          src={pizza.imageUrl}
          alt={pizza.title}
          className="pizzaInfo__img"
        />
      </Link>

      <p className="pizzaInfo__name">{pizza.title}</p>

      <div className="pizzaInfo__rating">
        <span>рейтинг пиццы</span>

        <span>{pizza.rating} / 10</span>
      </div>

      <div className="pizzaInfo__price">
        <span> стоимость пиццы</span>

        <span>
          {" "}
          от {pizza.price} {pizza.currency}
        </span>
      </div>
    </div>
  );
}
