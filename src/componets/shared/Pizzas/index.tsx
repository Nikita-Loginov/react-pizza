import React from "react";
import Pizza from "./part/Pizza";
import Skeleton from '../Skeleton';
import Pagination from "../Pagination";
import './index.scss';

import { PizzaType } from "../../../types/PizzaTypes";

interface PizzasTypes {
  pizzas : PizzaType[]
}

const Pizzas: React.FC<PizzasTypes> = React.memo(({ pizzas }) => {
  const items = pizzas;

  return (
    <section className="pizzas">
      <div className="container">
        <div className="pizzas__inner">
          <h1 className="pizzas__title">Все пиццы</h1>

          <div className="pizzas__items">
            {items.length
              ? items.map((item) => <Pizza key={item.id} item={{ ...item }} />)
              : [...new Array(4)].map((_, index) => <Skeleton key={index} />)}
          </div>

          <Pagination />
        </div>
      </div>
    </section>
  );
});

export default Pizzas;