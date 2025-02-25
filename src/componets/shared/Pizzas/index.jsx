import React, {useContext} from "react";
import { MyContext } from "../../../App";

import Pizza from "./part/Pizza";
import Skeleton from "../../Skeleton";

import './index.scss';

export default function Pizzas() {
  const items = useContext(MyContext);
  console.log(items)
  
  return (
    <section className="pizzas">
      <div className="container">
        <div className="pizzas__inner">
          <h1 className="pizzas__title">Все пиццы</h1>

          <div className="pizzas__items">
            {items.length ? items.map((item) => <Pizza key={item.id} item={{...item}}/>) : [...new Array(8)].map((_, index) => <Skeleton key={index}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}