import React from "react";
import { Link } from "react-router";

import "./index.scss";

import { PizzaType } from "../../../../types/PizzaTypes";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";

interface PizzaProps {
  pizza: PizzaType;
}

const Pizza: React.FC<PizzaProps> = ({ pizza }) => {
    const {icon, coefficient} = useSelector((state: RootState) => state.currency);
    
  return (
    <div className="pizzaInfo">
      <Link to={`/pizza/${pizza.id}`} className="pizzaInfo__img">
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
          от {(pizza.price / coefficient).toFixed(1)} {icon}
        </span>
      </div>
    </div>
  );
};

export default Pizza;
