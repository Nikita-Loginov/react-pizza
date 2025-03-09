import React, {useContext} from "react";

import Pizza from "./part/Pizza";
import Skeleton from '../Skeleton'
import Pagination from "../Pagination";

import './index.scss';

export default function Pizzas({pizzas}) {
  const items = pizzas;
  
  return (
    <section className="pizzas">
      <div className="container">
        <div className="pizzas__inner">
          <h1 className="pizzas__title">Все пиццы</h1>

          <div className="pizzas__items">
            {items.length ? items.map((item) => <Pizza key={item.id} item={{...item}}/>) : [...new Array(8)].map((_, index) => <Skeleton key={index}/>)}
          </div>

          <Pagination />
        </div>
      </div>
    </section>
  );
}